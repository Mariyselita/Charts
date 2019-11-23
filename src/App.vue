<template>
<div id="app">
   <header>
        <nav class="menu" id="myTopnav">
            <ul>
                <li style="float:left;">Bayonet</li>
                <li><a href="">Column Chart</a></li>
                <li><a href="">Line Chart</a></li>
            </ul>          
        </nav>
    </header>
    <home/>
</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>