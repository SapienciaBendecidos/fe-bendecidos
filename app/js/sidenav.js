$('#sidebar-ico').click(()=> $('#mySidenavN').removeClass('hidden'));

$('#Login').click(()=> {
	$('#mySidenavN').addClass('hidden');
	$('#sidebar-ico').addClass('hidden');
});

$(document).mouseup(function (e)
{
    var container = $('#mySidenavN');

    if (!container.hasClass('hidden') && !container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.addClass('hidden');
    }
});