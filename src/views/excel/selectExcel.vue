<template>
  <div class="app-container">
    <el-button style='margin-bottom:20px;float:right' type="primary" icon="document" @click="handleDownload">导出excel</el-button>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row @selection-change="handleSelectionChange" ref="multipleTable">
      <el-table-column type="selection" align="center"></el-table-column>

      <el-table-column align="center" label='ID' width="95">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>

      <el-table-column label="文章标题">
        <template scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>

      <el-table-column label="作者" width="110">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <el-table-column label="阅读数" width="105" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="发布时间" width="200">
        <template scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  import { getList } from 'api/article';

  export default {
    data() {
      return {
        list: null,
        listLoading: true,
        multipleSelection: []
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        getList(this.listQuery).then(response => {
          this.list = response.data;
          this.listLoading = false;
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleDownload() {
        if (this.multipleSelection.length) {
          require.ensure([], () => {
            const { export_json_to_excel } = require('vendor/Export2Excel');
            const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间'];
            const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
            const list = this.multipleSelection;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '列表excel');
            this.$refs.multipleTable.clearSelection();
          })
        } else {
          this.$message({
          message: '请选择一条或多条记录导出',
          type: 'warning'
          });
        }
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
    }
  };
</script>
