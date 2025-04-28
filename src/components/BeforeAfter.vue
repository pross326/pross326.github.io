<template>
    <section class="ba-section">
        <h2 class="ba-title">{{ title }}</h2>

        <div class="ba-wrapper" ref="wrapper" @mousedown="startDrag" @touchstart.prevent="startDrag">
            <!-- BEFORE image -->
            <img :src="beforeImage" alt="Before" class="ba-image" />

            <!-- AFTER image clipped by overlayWidth -->
            <div class="ba-overlay" :style="{ width: overlayWidth }">
                <img :src="afterImage" alt="After" class="ba-image" />
            </div>

            <!-- draggable handle -->
            <div class="ba-handle" :style="{ left: overlayWidth }"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BeforeAfter",
    props: {
        title: {
            type: String,
            default: "Before vs After",
        },
        beforeImage: {
            type: String,
            required: true,
        },
        afterImage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isDragging: false,
            overlayWidth: "50%",
        };
    },
    mounted() {
        window.addEventListener("mousemove", this.onDrag);
        window.addEventListener("mouseup", this.stopDrag);
        window.addEventListener("touchmove", this.onDrag, { passive: false });
        window.addEventListener("touchend", this.stopDrag);
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("mouseup", this.stopDrag);
        window.removeEventListener("touchmove", this.onDrag);
        window.removeEventListener("touchend", this.stopDrag);
    },
    methods: {
        startDrag(e) {
            this.isDragging = true;
            this.onDrag(e);
        },
        stopDrag() {
            this.isDragging = false;
        },
        onDrag(e) {
            if (!this.isDragging) return;
            const wrapper = this.$refs.wrapper.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            let offset = clientX - wrapper.left;
            offset = Math.max(0, Math.min(offset, wrapper.width));
            this.overlayWidth = `${(offset / wrapper.width) * 100}%`;
        },
    },
};
</script>

<style scoped>
.ba-section {
    padding: var(--spacing-base) 1rem;
    text-align: center;
}

.ba-title {
    font-size: 1.953rem;
    margin-bottom: var(--spacing-base);
    color: var(--color-text);
}

.ba-wrapper {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    user-select: none;
}

.ba-image {
    display: block;
    width: 100%;
    height: auto;
}

.ba-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
}

.ba-handle {
    position: absolute;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    cursor: ew-resize;
    transition: background 0.2s;
}

.ba-handle:hover {
    background: #fff;
}
</style>
