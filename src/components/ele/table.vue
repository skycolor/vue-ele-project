<template>
  <div class="container" >
  	<div class="btns">
  		<el-button type="danger" icon="el-icon-delete" @click="handleChooseDel" >
  			批量删除
  		</el-button>
  		<span class="pro-select" >
  			<label>筛选省份:</label>
	  		<el-select  v-model="selectVal" @change="selectChange"
	  			placeholder="筛选省份">
			    <el-option
			      label="全部"
			      :value="0">
			    </el-option>
			    <el-option
			      label="海外"
			      value="1">
			    </el-option>
			    <el-option
			      label="广东"
			      value="2">
			    </el-option>
			</el-select>
  		</span>
  		<span class="input-search">
  			<input ref="searchParam" autocomplete="off" placeholder="关键字筛选" type="text" class="el-input__inner">
  			<el-button type="primary" icon="el-icon-search" @click="search" >搜索</el-button>
  		</span>
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
import tableData from '../../data/tableData';

const tableList = tableData.list;
const pageSize = 5;

const selectDict = {"0" : "全部" , "1" : "海外" , "2" : "广东"};

export default {
  data() {
  	return {
  	 	showData : [] ,
  	 	chooseData : [] ,
  	 	pageSize : pageSize ,
  	 	pageTotal : tableData.list.length ,
  	 	selectVal: '' ,
  	 	curPage : 1
  	};
  } ,
  mounted(){
  	this.showData = tableList.slice(0 , pageSize);
  } ,
  methods: {
  	handleDelete(index , row){			//处理table单行删除
  		this.$confirm('是否删除该行?', '提示', {
  		  confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for(let i = 0 ; i < this.showData.length ; i++){
          	let item = this.showData[i];
          	if(row.name == item.name){
          		this.showData.splice(i , 1);
          		break;
          	}
          }
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
  	selectChange(val){			//下拉框change
  		if(val == 0) {
  			this.showData = tableList.slice((this.curPage - 1)*pageSize , this.curPage*pageSize);
  		}else{
  			let data = [] , param = selectDict[val];
  			for(let i = 0 , item ; item = this.showData[i++];){
  				if(item.address.indexOf(param) >= 0) data.push(item);
  			}
  			this.showData = data;
  		}
  	} ,
  	search(){				//搜索
  		let param = this.$refs.searchParam.value;
  		if(param == ''){
			this.showData = tableList.slice((this.curPage - 1)*pageSize , this.curPage*pageSize);
  			return;
  		} 
  		let data = [];
  		for(let i = 0 , item ; item = this.showData[i++];){
			if(item.address.indexOf(param) >= 0 || item.name.indexOf(param) >= 0) 
				data.push(item);
		}
		this.showData = data;
  	} ,
  	handlePage(val){		//处理分页
  		this.curPage = val;
  		this.showData = tableList.slice((val - 1)*pageSize , val*pageSize);
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
	          let data = [];
	          for(let i = 0 , item1 ; item1 = this.showData[i++]; ){
	          	 let judge = false;
	          	 for(let j = 0 , item2 ; item2 = this.chooseData[j++]; ){
	          	 	if(item1.name == item2.name){
	          	 		judge = true;
	          	 		break;
	          	 	}
	          	 }
	          	 if(!judge) data.push(item1);
	          }
	          this.showData = data;
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
  	}
  }
}
</script>


<style lang="scss" scoped >
	@import '../../style/ele/table';
</style>
