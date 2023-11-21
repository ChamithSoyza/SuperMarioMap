let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        // center: { lat: -34.397, lng: 150.644 },
        center: { lat: 34.6681350299417, lng: 135.4303440536244 },
        zoom: 17,
        mapId: 'b2dc5521a04a428',
        // to remove google map default settings aitems form our map
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    // name
    // latitude, longitude
    // image URL
    // scaled Size width,height
    const markers = [
        [
            "House",
            34.669485097656015,
            135.42846650733208,
            "mario_img1.svg",
            40,
            35
        ],
        [
            "Garage",
            34.66866447088332, 
            135.43209285388525,
            "mario_img2.svg",
            40,
            35
        ],
        [
            "Office",
            34.66678494022564,
             135.4302153075929,
            "mario_img3.svg",
            40,
            35
        ]
    ]

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({  //by making the marker equal to a const marker we can bind it to the event listener as below mentioned
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });

        // Map icon infow view
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        })

        // Event listner for the map infow view click
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }



    // 34.669485097656015, 135.42846650733208

    // Create markers.
    //    for (let i = 0; i < features.length; i++) {
    //     const marker = new google.maps.Marker({
    //       position: features[i].position,
    //       icon: icons[features[i].type].icon,
    //       map: map,
    //     });
    //   }
}

initMap();

// 34.6681350299417, 135.4303440536244