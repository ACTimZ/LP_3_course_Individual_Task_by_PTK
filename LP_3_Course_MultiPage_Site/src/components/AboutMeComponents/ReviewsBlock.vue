<template>
    <section class="bg-stone-50 xl:pt-30 md:pt-15 sm:pt-12.5 pt-17.5 xl:pb-55 md:pb-25 pb-15">
        <article class="container mx-auto">
            <article class="flex flex-col mx-5 gap-9">
                <h2 class="font-bold lg:text-5xl text-3xl text-indigo-950 lg:text-left text-center">Hear out what my
                    clients say about me.</h2>
                <article class="flex lg:flex-row flex-col gap-9">
                    <article
                        class="border border-gray-100 md:px-12 md:py-12 px-8 py-8 flex flex-col md:items-start items-center gap-4 bg-white opacity-95 review_card">
                        <p class="font-bold text-3xl text-gray-300 review_mark">5/5</p>
                        <p class="xl:text-2xl text-gray-700 text-xl md:text-left text-center">"I gained so much
                            <span>confidence</span> in
                            my ability to connect and deepen my relationships with people. "
                        </p>
                        <p class="text-2xl font-bold text-indigo-950">Jane</p>
                        <img src="../images/image 68.png" alt="">
                    </article>
                    <article
                        class="border border-gray-100 md:px-12 md:py-12 px-6 py-8 flex flex-col md:items-start items-center gap-4 bg-white opacity-85 review_card">
                        <p class="font-bold text-3xl text-gray-300 review_mark">5/5</p>
                        <p class="xl:text-2xl text-gray-700 text-xl md:text-left text-center">“Denise helped me
                            <span>organise</span> my diet. Highly recommend her services!”
                        </p>
                        <p class="text-2xl font-bold text-indigo-950">Catherine</p>
                        <img src="../images/image 68 (1).png" alt="">
                    </article>
                    <article
                        class="border border-gray-100 md:px-12 md:py-12 px-6 py-8 flex flex-col md:items-start items-center gap-4 bg-white opacity-75 review_card">
                        <p class="font-bold text-3xl text-gray-300 review_mark">5/5</p>
                        <p class="xl:text-2xl text-gray-700 text-xl md:text-left text-center">"I gained so much
                            <span>confidence</span> in my ability to
                            connect and deepen my relationships with people. "
                        </p>
                        <p class="text-2xl font-bold text-indigo-950">Jane</p>
                        <img src="../images/image 68 (2).png" alt="">
                    </article>
                </article>
            </article>
        </article>
    </section>
</template>

<style scoped>
.review_card {
    transition: .5s;

    &>p>span {
        transition: .1s;
    }
}

.review_mark {
    transition: .3s;
}

.review_card:hover {
    opacity: 100%;
    box-shadow: 3px 5px 5px rgb(201, 201, 201);
    transform: translateY(-1%);

    &>p>span {
        font-weight: 700;
    }

    &>.review_mark {
        color: #20AD96;
    }
}
</style>