<template>
	<div class="floor">
    <div class="floor-title"> {{floorTitle}} </div>
		<div class="floor-anomaly" >
      <!-- <div class="floor-one"><img :src="floor1[0].image" width="100%" /></div>    //  floor1[0].image 也是可以的 -->
      <div class="floor-one"><img :src="floorData0.image" width="100%" /></div>  
			<div>
				<div class="floor-two"><img :src="floorData1.image" width="100%" /></div>
				<div><img :src="floorData2.image" width="100%" /></div>
			</div>
		</div>
		<div class="floor-rule">
			<div v-for="(item ,index) in floor1.slice(3)" :key="index">
				<img :src="item.image" width="100%" />
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['floor1','floorTitle'],
		data() {
			return {
				// floorData0 : {},
				// floorData1 : {},s
				// floorData2 : {}
        floorData0 : this.floor1[0],
				floorData1 : this.floor1[1],
				floorData2 : this.floor1[2]
			}
		},
		created(){
			// console.log(this.floor1,)
		},
		// computed:{
		// 	floorData0:function(){
		// 		return this.floor1[0]
		// 	},
		// 	floorData1:function(){
		// 		return this.floor1[1]
		// 	},
		// 	floorData2:function(){
		// 		return this.floor1[2]
		// 	}
		// },
		watch:{
			// floor1:function(newval,oldval){
			// 	this.floorData0 = this.floor1[0],
			// 	this.floorData1 = this.floor1[1],
			// 	this.floorData2 = this.floor1[2]
			// }
		}

	}
</script>

<style lang="less" scoped>
  .floor-title{
      text-align:center;
      font-size:14px;
      height: 1.8rem;
      line-height: 1.8rem;
  }
	.floor-anomaly {
		display: flex;
		flex-direction: row;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}

	.floor-anomaly div {
		width: 10rem;

		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}

	.floor-one {
		border-right: 1px solid #ddd;

	}

	.floor-two {
		border-bottom: 1px solid #ddd;
	}

	.floor-rule {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: #fff;

	}

	.floor-rule div {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 10rem;
		border-bottom: 1px solid #ddd;
	}

	.floor-rule div:nth-child(odd) {
		border-right: 1px solid #ddd;
	}
</style>
