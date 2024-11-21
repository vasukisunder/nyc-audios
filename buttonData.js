const soundButtons = [
    {
        text: "drummers in columbus circle",
        file: "drummers in columbus circle.m4a",
        vizTypes: ["bars"],
        colors: {
            primary: "#FF9B9B",
            secondary: "#FFD4D4"
        },
        background: {
            color1: "#1a0f2c",     // deep purple
            color2: "#2d1810",     // dark rust
            color3: "#0f2d1f",     // forest
            color4: "#2c1420",     // wine
            color5: "#162d40",     // navy
            color6: "#2d1c0f",     // brown
            color7: "#1f102d"      // violet
        }
    },
    {
        text: "new york philharmonic",
        file: "new york philharmonic.m4a",
        vizTypes: ["spiral", "symmetry"],
        colors: {
            primary: "#93C6FF",
            secondary: "#B9DCFF"
        },
        background: {
            color1: "#251716",     // dark mahogany
            color2: "#162419",     // forest shadow
            color3: "#1d1b24",     // charcoal
            color4: "#241807",     // coffee
            color5: "#0d1f1f",     // deep pine
            color6: "#201318",     // dark berry
            color7: "#1a1c0f"      // olive shadow
        }
    },
    {
        text: "accordion in the subway",
        file: "accordion in the subway.m4a",
        vizTypes: ["waves", "terrain"],
        colors: {
            primary: "#B4E4AA",
            secondary: "#D6F5CF"
        },
        background: {
            color1: "#2b1615",     // brick
            color2: "#15231b",     // evergreen
            color3: "#261a0f",     // walnut
            color4: "#1c2614",     // moss
            color5: "#0f1d23",     // slate
            color6: "#231815",     // rosewood
            color7: "#1a1e24"      // gunmetal
        }
    },
    {
        text: "covid news in the bodega",
        file: "covid news in the bodega.m4a",
        vizTypes: ["symmetry", "waves"],
        colors: {
            primary: "#DDA5E9",
            secondary: "#F0C6FF"
        },
        background: {
            color1: "#1f1812",     // espresso
            color2: "#0f1a15",     // deep forest
            color3: "#1a1324",     // plum
            color4: "#241f1a",     // umber
            color5: "#162023",     // dark slate
            color6: "#1d150f",     // chocolate
            color7: "#141f1a"      // pine
        }
    },
    {
        text: "piano bar uptown",
        file: "piano bar uptown.m4a",
        vizTypes: ["spiral", "particles"],
        colors: {
            primary: "#A5B4FF",
            secondary: "#C6D0FF"
        },
        background: {
            color1: "#231612",     // dark cedar
            color2: "#1a1f24",     // charcoal blue
            color3: "#241a15",     // deep brown
            color4: "#151a22",     // midnight navy
            color5: "#221815",     // dark walnut
            color6: "#1a2224",     // deep teal
            color7: "#24181a"      // dark wine
        }
    },
    {
        text: "lesson from a tour guide",
        file: "lesson from a tour guide.m4a",
        vizTypes: ["terrain", "symmetry"],
        colors: {
            primary: "#FFB5BA",
            secondary: "#FFD4D7"
        },
        background: {
            color1: "#1a2415",     // forest night
            color2: "#241518",     // burgundy
            color3: "#152024",     // deep slate
            color4: "#1d1a15",     // dark khaki
            color5: "#22151d",     // dark plum
            color6: "#152218",     // pine forest
            color7: "#1d1522"      // deep mauve
        }
    },
    {
        text: "herbie hancock at summerstage",
        file: "herbie hancock at summerstage.m4a",
        vizTypes: ["particles", "spiral"],
        colors: {
            primary: "#B5E6FF",
            secondary: "#D4F0FF"
        },
        background: {
            color1: "#181524",     // dark indigo
            color2: "#241815",     // coffee bean
            color3: "#152418",     // deep moss
            color4: "#221518",     // dark berry
            color5: "#151824",     // twilight blue
            color6: "#241518",     // mahogany
            color7: "#182415"      // dark sage
        }
    },
    {
        text: "rooftop party conversations",
        file: "rooftop party conversations.m4a",
        vizTypes: ["waves", "symmetry"],
        colors: {
            primary: "#FF9B85",
            secondary: "#FFBFB2"
        },
        background: {
            color1: "#241815",     // dark mahogany
            color2: "#152418",     // deep forest
            color3: "#181524",     // dark plum
            color4: "#221815",     // dark amber
            color5: "#152224",     // dark slate
            color6: "#241518",     // dark wine
            color7: "#182415"      // dark olive
        }
    },
    {
        text: "dinner in little italy",
        file: "dinner in little italy.m4a",
        vizTypes: ["waves", "circles"],
        colors: {
            primary: "#FFB17A",
            secondary: "#FFD4B2"
        },
        background: {
            color1: "#241815",     // dark roast
            color2: "#152418",     // deep olive
            color3: "#181524",     // dark grape
            color4: "#152224",     // deep ocean
            color5: "#241518",     // dark rose
            color6: "#182224",     // stormy sea
            color7: "#221815"      // dark sienna
        }
    },
    {
        text: "chinatown night market",
        file: "chinatown night market.m4a",
        vizTypes: ["circles", "particles"],
        colors: {
            primary: "#7ECECA",
            secondary: "#A5E6E1"
        },
        background: {
            color1: "#151824",     // dark denim
            color2: "#241518",     // dark crimson
            color3: "#182415",     // dark emerald
            color4: "#221524",     // dark mulberry
            color5: "#152224",     // dark cyan
            color6: "#241815",     // dark chocolate
            color7: "#182218"      // dark forest
        }
    },
    {
        text: "edm in williamsburg",
        file: "edm in williamsburg.m4a",
        vizTypes: ["spiral", "circles"],
        colors: {
            primary: "#B8A5FF",
            secondary: "#D4C6FF"
        },
        background: {
            color1: "#241518",     // dark wine
            color2: "#151824",     // dark navy
            color3: "#182415",     // dark moss
            color4: "#221815",     // dark amber
            color5: "#152418",     // dark jade
            color6: "#181524",     // dark violet
            color7: "#152224"      // dark turquoise
        }
    },
    {
        text: "birds in brooklyn",
        file: "birds in brooklyn.m4a",
        vizTypes: ["particles", "circles"],
        colors: {
            primary: "#E6C9FF",
            secondary: "#F0E1FF"
        },
        background: {
            color1: "#241815",     // dark walnut
            color2: "#152418",     // dark moss
            color3: "#181524",     // dark lavender
            color4: "#221815",     // dark amber
            color5: "#152224",     // dark ocean
            color6: "#241518",     // dark rose
            color7: "#182415"      // dark olive
        }
    },
    {
        text: "sounds of mta",
        file: "sounds of mta.m4a",
        vizTypes: ["terrain", "waves"],
        colors: {
            primary: "#A5C9FF",
            secondary: "#C9E1FF"
        },
        background: {
            color1: "#151824",     // dark slate
            color2: "#182415",     // dark evergreen
            color3: "#241518",     // dark ruby
            color4: "#152224",     // dark azure
            color5: "#221815",     // dark bronze
            color6: "#182218",     // dark pine
            color7: "#221524"      // dark orchid
        }
    },
    {
        text: "taco truck in bushwick",
        file: "taco truck in bushwick.m4a",
        vizTypes: ["symmetry", "particles"],
        colors: {
            primary: "#FFB5B5",
            secondary: "#FFD6D6"
        },
        background: {
            color1: "#241815",     // dark rust
            color2: "#152418",     // dark fern
            color3: "#181524",     // dark lavender
            color4: "#221815",     // dark copper
            color5: "#152224",     // dark marine
            color6: "#241518",     // dark rose
            color7: "#182415"      // dark moss
        }
    },
    {
        text: "vampire weekend at MSG",
        file: "vampire weekend at MSG.m4a",
        vizTypes: ["spiral", "waves"],
        colors: {
            primary: "#B5D6FF",
            secondary: "#D4E6FF"
        },
        background: {
            color1: "#182415",     // dark sage
            color2: "#241815",     // dark terra
            color3: "#151824",     // dark cobalt
            color4: "#221524",     // dark amethyst
            color5: "#152418",     // dark spruce
            color6: "#241518",     // dark garnet
            color7: "#152224"      // dark cerulean
        }
    },
    {
        text: "subway performers",
        file: "subway performers.m4a",
        vizTypes: ["waves", "symmetry"],
        colors: {
            primary: "#E6B5D6",
            secondary: "#F0D4E6"
        },
        background: {
            color1: "#241518",     // dark burgundy
            color2: "#152418",     // dark thyme
            color3: "#181524",     // dark iris
            color4: "#152224",     // dark aegean
            color5: "#221815",     // dark amber
            color6: "#182218",     // dark cypress
            color7: "#221524"      // dark plum
        }
    },
   
    {
        text: "bachata dancers in harlem",
        file: "bachata dancers in harlem.m4a",
        vizTypes: ["particles", "bars"],
        colors: {
            primary: "#A5D6E6",
            secondary: "#C6E6F0"
        },
        background: {
            color1: "#151824",     // dark indigo
            color2: "#241518",     // dark crimson
            color3: "#182415",     // dark moss
            color4: "#221524",     // dark mulberry
            color5: "#152418",     // dark jade
            color6: "#181524",     // dark violet
            color7: "#152224"      // dark azure
        }
    },
    {
        text: "mitski at prospect park",
        file: "mitski at prospect park.m4a",
        vizTypes: ["spiral", "particles"],
        colors: {
            primary: "#FFB5D0",
            secondary: "#FFD4E4"
        },
        background: {
            color1: "#241815",     // dark sepia
            color2: "#152418",     // dark evergreen
            color3: "#181524",     // dark purple
            color4: "#221815",     // dark copper
            color5: "#152224",     // dark marine
            color6: "#241518",     // dark rose
            color7: "#182415"      // dark sage
        }
    },
    {
        text: "ambient bryant park",
        file: "ambient bryant park.m4a",
        vizTypes: ["terrain", "symmetry"],
        colors: {
            primary: "#B5E2B5",
            secondary: "#D4F0D4"
        },
        background: {
            color1: "#151824",     // dark slate
            color2: "#241518",     // dark burgundy
            color3: "#182415",     // dark forest
            color4: "#221524",     // dark grape
            color5: "#152418",     // dark pine
            color6: "#181524",     // dark violet
            color7: "#152224"      // dark teal
        }
    },
   

    {
        text: "midtown house party",
        file: "midtown house party.m4a",
        vizTypes: ["bars", "spiral"],
        colors: {
            primary: "#FFD6A5",
            secondary: "#FFE6C9"
        },
        background: {
            color1: "#182415",     // dark olive
            color2: "#241815",     // dark sepia
            color3: "#151824",     // dark blue
            color4: "#221524",     // dark purple
            color5: "#152418",     // dark green
            color6: "#241518",     // dark maroon
            color7: "#152224"      // dark teal
        }
    }
]; 