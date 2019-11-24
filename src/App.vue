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
      <router-view class="view"></router-view>
</div>
</template>

<script>
export default {
  
}
</script>