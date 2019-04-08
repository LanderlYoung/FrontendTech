<template>
    <div id="app">
        <ul type="none">
            <li v-for="story in zhihu.stories">
                <story-brief v-bind:story="story"></story-brief>
            </li>
        </ul>
    </div>
</template>

<script>

    import StoryBrief from "./StoryBrief";

    export default {
        name: 'StoryList',
        components: {StoryBrief},
        data() {
            return {
                // https://news-at.zhihu.com/api/4/news/latest
                zhihu: JSON.parse('{"date":"20190408","stories":[{"images":["https:\\/\\/pic2.zhimg.com\\/v2-7b6e4da6e2181aab1ddaa7acca1ffa6d.jpg"],"type":0,"id":9710036,"ga_prefix":"040819","title":"他们为什么背着我说话？一定是在针对我，我不开心了"},{"images":["https:\\/\\/pic2.zhimg.com\\/v2-2cdf1651d1466719bd71df11b1a117d5.jpg"],"type":0,"id":9710040,"ga_prefix":"040818","title":"两个人吵架，最恐怖的莫过于……被翻旧账"},{"images":["https:\\/\\/pic4.zhimg.com\\/v2-bce58bcbb271e0b5b39282365393824b.jpg"],"type":0,"id":9709943,"ga_prefix":"040810","title":"贫血、停经、肠胃感染……吃素食真的会对身体有害吗？"},{"images":["https:\\/\\/pic3.zhimg.com\\/v2-3ec50c1f229fa6910b55dc12502c76ea.jpg"],"type":0,"id":9710008,"ga_prefix":"040807","title":"在 IT 行业，拿 50~100 万年薪"},{"images":["https:\\/\\/pic4.zhimg.com\\/v2-bce98d86603da7e9324bf69884e8e3b7.jpg"],"type":0,"id":9709824,"ga_prefix":"040806","title":"瞎扯 · 如何正确地吐槽"}],"top_stories":[{"image":"https:\\/\\/pic1.zhimg.com\\/v2-f1868f01be028cef75f703887f0bf864.jpg","type":0,"id":9710040,"ga_prefix":"040818","title":"两个人吵架，最恐怖的莫过于……被翻旧账"},{"image":"https:\\/\\/pic4.zhimg.com\\/v2-e3a8b421c415e62289fe798aa6b2cdfb.jpg","type":0,"id":9710008,"ga_prefix":"040807","title":"在 IT 行业，拿 50~100 万年薪"},{"image":"https:\\/\\/pic2.zhimg.com\\/v2-6f80f0661d0baec17160ed07640f822d.jpg","type":0,"id":9709724,"ga_prefix":"040719","title":"「弟弟妹妹小，让给弟弟妹妹吧」真的能让孩子学会谦让吗？"},{"image":"https:\\/\\/pic3.zhimg.com\\/v2-5fd57c4d254029e9ea991be4eb7a9fd2.jpg","type":0,"id":9710014,"ga_prefix":"040716","title":"先是冲我打了一枪，然后还要开炮，人类也太凶残了吧"},{"image":"https:\\/\\/pic3.zhimg.com\\/v2-1857dba92a79f06d76c8164b78d8a5ea.jpg","type":0,"id":9709875,"ga_prefix":"040621","title":"改编不是乱编，游戏改编电影为什么总是那么烂？"}]}')
            }
        },
        created() {
        },
    }
</script>

<style>
</style>
