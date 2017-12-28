<div></div><template>
  <div class="container">
  	<bread-nav  :list="breadList" iconClass="el-icon-document" />
  	<!-- 轮播图 -->
    <div class="banner" >
     	<el-carousel trigger="click" :interval="6000" type="card" >
		    <el-carousel-item >
		      	<img src="../../image/ele/banner1.jpg" />
		    </el-carousel-item>
		    <el-carousel-item >
		      	<img src="../../image/ele/banner2.jpg" />
		    </el-carousel-item>
		    <el-carousel-item >
		      	<img src="../../image/ele/banner3.jpg" />
		    </el-carousel-item>
		    <el-carousel-item >
		      	<img src="../../image/ele/banner4.jpg" />
		    </el-carousel-item>
		    <el-carousel-item >
		      	<img src="../../image/ele/banner5.jpg" />
		    </el-carousel-item>
		    <el-carousel-item >
		      	<img src="../../image/ele/banner6.jpg" />
		    </el-carousel-item>
		</el-carousel>
    </div>
    <!-- 问题提示 -->
    <div class="box">
		  <div class="top">
		    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
		      <el-button>上左</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
		      <el-button>上边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
		      <el-button>上右</el-button>
		    </el-tooltip>
		  </div>
		  <div class="left">
		    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
		      <el-button>左上</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
		      <el-button>左边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
		      <el-button>左下</el-button>
		    </el-tooltip>
		  </div>

		  <div class="right">
		    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
		      <el-button>右上</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
		      <el-button>右边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
		      <el-button>右下</el-button>
		    </el-tooltip>
		  </div>
		  <div class="bottom">
		    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
		      <el-button>下左</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
		      <el-button>下边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
		      <el-button>下右</el-button>
		    </el-tooltip>
		  </div>
	</div>
	<!-- 普通的栏栅布局  -->
	<div class="layout">
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
	</div>
  </div>
</template>

<script>
import breadNav from '../include/breadNav';

export default {
  data() {
      return {
        breadList : ['element' , '基本' ]
      };
  } ,
  components : {
      breadNav
  } 
}
</script>


<style lang="scss" scoped >
	@import '../../style/ele/base';
</style>
