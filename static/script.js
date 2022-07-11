const elements = document.getElementsByClassName('nav-item');
for(let i=0; i < elements.length; i++)
{
    elements[i].addEventListener('mouseenter', showMenu, false);
    elements[i].addEventListener('mouseleave', hidemenu, false);
}
function showMenu() {
    if(this.children.length>1)
    {
        this.children[1].style.height = 'auto';
        this.children[1].style.opacity = '1'
        this.children[1].style.overflow = 'visible';
    }
    else {
        return false;
    }
}
function hidemenu() {
    if(this.children.length>1)
    {
        this.children[1].style.height = '0';
        this.children[1].style.opacity = '0'
        this.children[1].style.overflow = 'hidden';
    }
}