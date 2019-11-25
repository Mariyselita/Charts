<template>
<div id="app">
   <header>
        <nav class="menu" id="myTopnav">
            <ul>
                <li style="float:left;"><router-link to='/'>Bayonet</router-link></li>
                <li class="lista"><router-link class="lista" to='/ranking'>Ranking repositories</router-link></li>
                <li class="lista"><router-link class="lista" to='/commit'>Commit Activity</router-link></li>
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