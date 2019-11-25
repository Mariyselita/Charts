<template>
<div class="container">
    <div class="espacio">
        <line-chart :chart-data="commitReactData" v-if="commitReactData"></line-chart>
    </div>
</div>
</template>

<script>
import LineChart from './LineChart.vue';
export default {
   components: { LineChart },
   data () {
      return {
        commitReactData: undefined
      }
    },
    async created(){
         const response = await this.axios.get('https://api.github.com/repos/facebook/react/stats/commit_activity', {
            headers: { 'Accept':'application/vnd.github.v3+json'}
        });
        //Se valida que la data del response de la api de gh sea un arreglo y tenga por lo menos 10 elements
        if (Array.isArray(response.data)&& response.data.length >= 10){

            this.commitReactData = {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
                datasets: [{ 
                    label: 'React Commit Activity',
                    borderColor: '#53D0D0',
                    backgroundColor: '#53d0d036',
                    data: response.data.slice(-10).map(week => week.total)
                }],
                
            };
        } 
    }
}
</script>