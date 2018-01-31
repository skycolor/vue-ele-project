<template>
  <div class="container" >
    <bread-nav  :list="breadList" iconClass="el-icon-document" />
  	<div class="btns">
  		<!-- <el-button type="primary" icon="el-icon-circle-plus-outline" >
        新增
      </el-button> -->
      <el-button type="danger" icon="el-icon-delete" @click="handleChooseDel" >
        批量删除
      </el-button>
  	</div>
  	<div class="content">
  		<el-table
  			class="mainTable"
  			ref="mainTable"
  			:data="showData"
		    :default-sort = "{prop: 'name', order: 'descending'}"
		    @selection-change="chooseCheckBox"
		    stripe border>
		    <el-table-column align="center"
		      @selection-change="chooseCheckBox"
		      type="selection" >
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      sortable
		      label="姓名">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      sortable
		      label="地址">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      sortable
		      label="日期">
		    </el-table-column>
		    <el-table-column label="操作" align="center">
		      <template slot-scope="scope">
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
	    </el-table>
      <el-pagination
        class="page-control"
        background
        layout="prev, pager, next"
        @current-change="handlePage"
        :page-size="pageSize"
        :total="pageTotal">
      </el-pagination>
  	</div>
  </div>
</template>

<script>
import {mapState , mapActions , mapMutations} from 'vuex'
import breadNav from '../include/breadNav';

const pageSize = 5;
const selectDict = {"0" : "全部" , "1" : "海外" , "2" : "广东"};

export default {
  data() {
  	return {
  	 	showData : [] ,
  	 	chooseData : [] ,
  	 	pageSize : pageSize ,
      pageTotal : 0 ,
  	 	selectVal: '' ,
  	 	curPage : 1 ,
      breadList : ['element' , '表格Vux' ]
  	};
  } ,
  mounted(){
    this.handleUsers();
  } ,
  watch : {
    users(curVal,oldVal){
　　　　this.showData = curVal.slice(0 , pageSize);
       this.pageTotal = curVal.length;
　　 }
  } ,
  components : {
      breadNav
  } ,
  computed : {
      ...mapState([
        'users'
      ]) 
  } ,
  methods: {
    ...mapActions([
        'getUsers' 
    ]),
    ...mapMutations([
        'deleteUsers'
    ]),
    handleUsers(){        //处理用户数据
      if(this.users.length != 0){
        this.showData = this.users.slice(0 , pageSize);
        this.pageTotal = this.users.length;
      }else
        this.getUsers();
    } ,
  	handleDelete(index , row){			//处理table单行删除
  		this.$confirm('是否删除该行?', '提示', {
  		  confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteUsers([ row.name ]);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       
  	} ,
  	chooseCheckBox(val){	//table checkbox选中事件	
      this.chooseData = val;
  	} ,
  	handleChooseDel(){		//处理table的全体删除
  		if(this.chooseData.length == 0){	//table内容一个都没选
		  this.$message({
            type: 'info',
            message: '亲，你未选择任何行'
          }); 
  		}else{
			this.$confirm('是否删除?', '提示', {
	  		  confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
            let names = [];
            for(let i = 0 , o ; o = this.chooseData[i++];){
              names.push(o.name);
            }
	          this.deleteUsers(names);
            this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
  		}
  	},
    handlePage(val){    //处理分页
      this.curPage = val;
      this.showData = this.users.slice((val - 1)*pageSize , val*pageSize);
    } 
  }
}
</script>


<style lang="scss" scoped >
	@import '../../style/ele/tableVux';
</style>
