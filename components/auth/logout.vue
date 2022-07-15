<template>
    <div 
        class="d-flex logout-btn" 
        @click="$auth.logout('cookie')" 
        style="cursor: pointer"
    >
        <img 
            src="../../assets/icon/navigation/log-out.png" 
            style="height: 1.1rem; width: auto; transform: translateY(2px); cursor: pointer" 
            class="mr-2"
        />
        <div class="accent--text mr-3" style="font-size: 13.5px !important; white-space: nowrap;">
            Sign out 
        </div>
    </div>
</template