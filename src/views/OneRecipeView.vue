<template>
    <div class="one-recipe-view">
        <div class="container">
            <section class="image-recipe">
                <div class="img-placeholder">
                    IMAGE
                </div>
            </section>
            <section class="text-recipe">
                <div class="recipe">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque maiores minima rem!
                        Consectetur deleniti dolores earum iusto. Beatae blanditiis ea eaque, enim ex in mollitia porro
                        quas sunt velit.</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 4rem;
    height: 20rem;
    justify-content: center;
    margin: 2rem;
    padding: 1rem;

    .image-recipe {
        height: 100%;
    }

    .img-placeholder {
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #ddd;
        border-radius: 4px;
    }

    .text-recipe {
        color: #555;
        font-size: 0.9rem;
    }

}
</style>