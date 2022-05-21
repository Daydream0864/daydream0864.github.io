class Myheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <Header>
        <nav>
          <ul class="snip1143">
                <li class="current"><a href="Index.html" data-hover="Home">Home</a></li>
                <li><a href="Project.html" data-hover="Project">Project</a></li>
                <li><a href="Render.html" data-hover="Render">Render</a></li>
                <li><a href="Resources.html" data-hover="Resources">Resources</a></li>
                <li><a href="Social.html" data-hover="Social">Social</a></li>
                <li><a href="#" data-hover="Contact">Contact</a></li>
            </ul>
            </nav>
        </Header>
        `
    }

}
customElements.define('my-header', Myheader)