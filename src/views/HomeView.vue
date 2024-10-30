<script setup lang="ts">
</script>

<template>
    <div class="container">

        <main class="main-content">
            <section class="intro">
                <p>Intro</p>
            </section>
            <section class="grid-section">
                <div class="grid-item" v-for="n in 6" :key="n">
                    <div class="image-placeholder">IMAGE</div>
                    <p class="text-placeholder">TEXT</p>
                </div>
            </section>
        </main>

        <footer class="footer">
            FOOTER
        </footer>
        <section class="copyright">
            espace copyrigth
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container  {
    display: grid;
    grid-template-rows: 1fr auto auto; // En premier et en dernier l'espace nécessaire pour le header et le footer,
    // en 2e l'espace qui reste
    min-height: calc(100vh - 10rem); // 10rem -> hauteur du header

    .main-content {
        padding: 2rem;

        .intro {
            color: #666;
            font-size: 1.2rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .grid-section {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;

            .grid-item {
                background-color: #fff;
                border-radius: 8px;
                padding: 1rem;
                width: 100%;
                max-width: 200px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                text-align: center;
            }

            .image-placeholder {
                height: 100px;
                background-color: #ddd;
                border-radius: 4px;
                margin-bottom: 0.5rem;
            }

            .text-placeholder {
                color: #555;
                font-size: 0.9rem;
            }
        }
    }

    .footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 1rem;
        font-size: 0.9rem;
    }

    .copyright {
        background-color: rgba(175, 175, 175, 0.84);
        color: #fff;
        text-align: center;
        padding: 2rem;
        font-size: 0.9rem;
    }
}
</style>
