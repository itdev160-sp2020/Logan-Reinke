$(function() {

    var data = [
        {
            id: 1,
            title: 'For the Hard Times',
            body: 'Just keep swimming. Just keep swimming. Swimming, swimming, swiming. What do you when you swim? Swim.',
            author: 'Dory'
        },
        {
            id: 2,
            title: 'For Your Friends',
            body: 'Fish are friends, not food.',
            author: 'Nigel'
        },
        {
            id: 3,
            title: 'For Your Pets',
            body: 'I shall call him Squishy and he shall be mine and he shall be my Squishy Come on, Squishy Come on, little Squishy.',
            author: 'Dory'
        },
        {
            id: 4,
            title: 'Bruce',
            body: 'Hello, my name\'s Bruce!',
            author: 'Bruce'
        },
        {
            id: 5,
            title: 'For Timeless Wisdom',
            body: 'Duuuuuuuuuude',
            author: 'Crush'
        },
        {
            id: 6,
            title: 'For Those Who Need Some Direction',
            body: 'Wwwwweeeee neeeeeeeed tooooooo fiiiiiind hiiiiis sooooon. Caaaan youuuuuu pleeeeeease give us direeeeections? Come Baaaaaaack!',
            author: 'Dory'
        },
        {
            id: 7,
            title: 'For Timeless Wisdom',
            body: 'P. Sherman, 42 Wallaby Way, Sydney.',
            author: 'Dory Et al.'
        },
        {
            id: 8,
            title: 'For Embarrassing Moments with Friends',
            body: 'You guys made me ink.',
            author: 'Pearl'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {

            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function(){
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
                console.log(id);
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
        console.log($(postId));
        
    }

    initPosts();
    console.log($('post').text());
    console.log($('post').attr('id'));
});