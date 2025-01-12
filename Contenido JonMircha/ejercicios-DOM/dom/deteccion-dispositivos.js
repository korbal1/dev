const d = document,
    n = navigator,
    ua = n.userAgent;
export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        any: function () {
            return this.android() || this.ios();
        }
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edg/i),
        any: function () {
            return (
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()||
                this.ie()||
                this.edge()||
                this.any()
            );
        }
    };
    // console.log(ua);
    // console.log(isMobile.android());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());
    $id.innerHTML = `
    <ul>
        <li>User Agent:<b>${ua}</b></li>
        <li>Plataforma:<b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>
    `;

    //Contenido Exclusivo
    if(isBrowser.edge()) {
        $id.innerHTML += `
        <p>
            <mark>Este contenido se ve únicamente en Edge</mark>
        </p>
        `;
    }

    /*Redirecciones*/
    if(isMobile.android()){
        window.location.href = "https://www.android.com/intl/es_es/"
    };
}
