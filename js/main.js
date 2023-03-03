
$(document).ready(function() {

    //将需要置顶的物品加载到物品栏
    loadIcon($('.item[type="face"], .item[type="cap"]'), 'img/default/icon/无.png')
    //加载所有物品到物品栏
    eval('iconList').map(function(icon) {
        var tmp = icon.split('/')
        loadIcon($(`.item[sex="${tmp[1]}"][type="${tmp[2]}"]`), icon)
    })

    //设置标签点击事件
    $('.tab').click(function() {
        //设置其它所有selected为空
        $(`*[status="selected"]:not('.tab[type=${$(this).attr('type')}]')`).attr('status', '')
        //设置当前标签状态
        $(this).attr('status', ($(this).attr('status') == '') ? 'selected' : '')
        //根据当前标签状态设置对应物品栏状态、主面板状态
        $(`.item[sex="${$('.sex').attr('sex')}"][type="${$(this).attr('type')}"]`).attr('status', $(this).attr('status'))
        $('.main-container').attr('status', $(this).attr('status'))
    })

    //设置切换性别按钮点击事件
    $('.sex').click(function() {
        //切换性别状态
        $(this).attr('sex', (`${$(this).attr('sex')}` == 'boy') ? 'girl' : 'boy')
        //双击物品标签关闭再大概物品栏
        $('.tab[status="selected"]').click().click()
    })

    //点击物品栏外关闭物品栏
    $('.show-container').click(function() {
        if($('main-container').attr('status') != '') {
            $('*[status="selected"]').click()
        }
    })
})

//将图片加载到物品栏并设置点击事件
function loadIcon(item, src) {
    item.append(`<img class="icon" src="${src}" title="${src.substr(src.indexOf('icon') + 5).replace('.png', '')}">`)
    item.children('img:last-child').click(function() {
        $(`.show[type="${$(this).parent().attr('type')}"]`).css('content', `url('./${src.replace('/icon', '')}')`)
    })
}

