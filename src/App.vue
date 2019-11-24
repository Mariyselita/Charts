<template>
<div id="app">
   <header>
        <nav class="menu" id="myTopnav">
            <ul>
                <li style="float:left;">Bayonet</li>
                <li><router-link to='/ranking'>Ranking repositories</router-link></li>
                <li><router-link to='/commit'>Commit Activity</router-link></li>
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