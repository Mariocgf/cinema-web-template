const NavBar = () => {
    return <div className="component-navBar">
        <p>Cinema template</p>
        <div className="component-navBar-options">
            <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
            </form>
        </div>
        <p>User</p>
    </div>
}

export default NavBar