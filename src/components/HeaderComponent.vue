<template>
    <header class="header">
        <section class="logo">
            <div>Logo</div>
        </section>
        <section class="menu">
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recettes</a></li>
                    <li><a href="">A propos</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </section>
    </header>
</template>

<style lang="scss">
.header {
    align-items: center;
    background-color: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 10rem;
    margin-bottom: 2rem;
    padding: 1rem;

    .logo {
        font-size: 2rem;
    }

    .menu {
        ul {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            padding: 0;

            li a {
                color: #fff;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
}
</style>