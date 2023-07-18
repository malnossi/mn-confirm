<template>
    <transition name="fade">
        <div class="popup-modal" v-if="isVisible">
            <div class="window">
                <h2 style="margin-top: 0">{{ title }}</h2>
                <p>{{ message }}</p>
                <div class="btns">
                    <button class="cancel-btn" @click="cancel">{{ cancelButton }}</button>
                    <button class="ok-btn" @click="confirm">{{ okButton }}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>

export default {
    name: 'ConfirmDialogComponent',
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: () => ''
        },
        okButton: {
            type: String,
            default: () => "Ok"
        },
        cancelButton: {
            type: String,
            default: () => "Cancel"
        },
    },
    data: () => ({
        isVisible: true
    }),
    methods: {
        confirm() {
            this.isVisible = false;
            this.$emit('confirm');
        },
        cancel() {
            this.isVisible = false;
            this.$emit('cancel');
        }
    }
}
</script>
<style scoped>
/* css class for the transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.popup-modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    z-index: 1;
}

.window {
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 500vh;
}

.btns {
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.ok-btn {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    border-radius: 5px;
    color: #f7f7f7;
    background: #5cb85c;
    line-height: 1.15;
    font-size: 16px;
    margin: 10px;
}

.cancel-btn {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    border-radius: 5px;
    color: #f7f7f7;
    background: #ff5000;
    line-height: 1.15;
    font-size: 16px;
    margin: 10px;
}
</style>
  
  