$(function () {
    // Add  fast click to toggle menu
    $('.x-toggle-menu').each(function () {
        //FastClick.attach(this);
        //$(this).click(displayNavigation);
    });

    // Expand & Collapse menus
    $('.x-submenu-button').each(function () {
        $(this).click(onExpandCollapse);
    });

    // Moving this code to the template
    /*$('nav li > div > a:first-child[href*="javascript:void(0)"]').each(function () {
        $(this).addClass('x-expand-collapse');
    });*/

    $('.x-expand-collapse').each(function () {
        var element = $(this);
        element.click(function () {
            var childrens = element.parents('li').children(':nth-child(2)').find('a');
            var count = childrens.length;
            if(count > 1)
                element.parent().children('.x-submenu-button')[0].click();
            else if (count == 1)
                childrens[0].click();
        });
    });
    
    function onExpandCollapse() {
        var element = $(this), sublist = element.parent().next();
       
        // When a menu is expanded it has to collapse the siblings and the childs of the siblings
        if (!element.hasClass('x-menu-collapse')) {

            // Slide up all the open items
            slideUp(element);

            element.addClass('x-menu-collapse');

            sublist.slideDown({
                complete: function () {
                    //
                }
            });
        }
        else
            slideUp(element);
    }

    /**
     * @element: is the button to expand or collapse the submenu
     *
     */
    function slideUp(element)
    {
        var expandedList = element.closest('ul').find('.x-menu-collapse');

        expandedList.each(function () {
            var item = $(this), sublist = item.parent().next();

            sublist.slideUp({
                complete: function () {
                    //
                }
            });

            item.removeClass('x-menu-collapse');
        });
    }
});
