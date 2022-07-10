<script setup>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

//get scss variable
import scssExportJson from '@/styles/variables-to-js.scss'

//get routes
import { constantRoutes } from '@/router'

const route = useRoute()
// const permissionStore = usePermissionStore()
// const routes = computed(() => {
//     return permissionStore.routes
// })
const isCollapse = computed(() => {
    //   return appStore.sidebar.opened
    return true
})

const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) {
        return meta.activeMenu
    }
    return path
})

//change  scss variable to js
const dillScssExportToJson = (scssExportJson) => {
    const jsonString = scssExportJson.replace(/:export\s*/, '').replace(/[\s+\r\n]/g, '')
    const scssJson = {}
    jsonString
        .slice(1, jsonString.length - 2)
        .split(';')
        .forEach((fItem) => {
            const arr = fItem.split(':')
            scssJson[arr[0]] = arr[1]
        })
    return scssJson
}
const scssJson = dillScssExportToJson(scssExportJson)
</script>

<template>
    <div id="Sidebar" class="reset-menu-style">
        <!-- <Logo v-if="settings.sidebarLogo" :collapse="!isCollapse" /> -->
        <Logo :collapse="!isCollapse" />

        <!--router nav-->
        <el-scrollbar>
            <el-menu class="el-menu-vertical" :default-active="activeMenu" :collapse="!isCollapse"
                :unique-opened="false" :collapse-transition="false" :background-color="scssJson.menuBg"
                :text-color="scssJson.menuText" :active-text-color="scssJson.menuActiveText" mode="vertical">

                <!-- <el-menu-item index="2">
                    <el-icon><AddLocation /></el-icon>
                    <template v-slot:title>Navigator Two</template>
                </el-menu-item> -->

                <SidebarItem v-for="route in constantRoutes" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss">
.reset-menu-style {
    .el-menu {
        border-right: none;
    }

    .el-scrollbar__wrap {
        padding-bottom: 10vh;
    }
}

.el-menu-vertical {
    width: $sideBarWidth;
}
</style>