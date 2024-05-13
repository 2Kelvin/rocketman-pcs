// xfx 570 4gb
import img570 from './images/gpus/xfx_570_4gb/570.jpg';
import img570_2 from './images/gpus/xfx_570_4gb/570_2.jpg';

// msi 480 4gb
import msi480_1 from './images/gpus/msi480_4gb/rx480.png';
import msi480_2 from './images/gpus/msi480_4gb/rx480_back.jpg';

// aorus 580 4gb
import aorus from './images/gpus/aorus_580_4gb/aorus.jpg';
import aorus1 from './images/gpus/aorus_580_4gb/aorus1.jpg';
import aorus2 from './images/gpus/aorus_580_4gb/aorus2.jpg';
import aorus3 from './images/gpus/aorus_580_4gb/aorus3.jpg';
import aorus4 from './images/gpus/aorus_580_4gb/aorus4.jpg';
import aorus5 from './images/gpus/aorus_580_4gb/aorus5.jpg';

// msi 580 8gb
import msi580_1 from './images/gpus/msi_580_8gb/msi580_1.png';
import msi580_2 from './images/gpus/msi_580_8gb/msi580_2.png';
import msi580_3 from './images/gpus/msi_580_8gb/msi580_3.png';
import msi580_4 from './images/gpus/msi_580_8gb/msi580_4.png';

// xfx 580 4gb
import xfx1 from './images/gpus/xfx_580_4gb/xfx_580_1.jpg';
import xfx2 from './images/gpus/xfx_580_4gb/xfx_580_2.jpg';
import xfx3 from './images/gpus/xfx_580_4gb/xfx_580_3.jpg';

// zotac 970
import gtx970_1 from './images/gpus/zotac_970/gtx_970_1.png';
import gtx970_3 from './images/gpus/zotac_970/gtx_970_3.png';
import gtx970_5 from './images/gpus/zotac_970/gtx_970_5.jpg';

// evga 1050ti
import gtx1050ti_1 from './images/gpus/gtx1050ti/gtx1050ti1.jpg';
import gtx1050ti_3 from './images/gpus/gtx1050ti/gtx1050ti3.jpg';
import gtx1050ti_4 from './images/gpus/gtx1050ti/gtx1050ti4.jpg';
import gtx1050ti_5 from './images/gpus/gtx1050ti/gtx1050ti5.jpg';
import gtx1050ti_6 from './images/gpus/gtx1050ti/gtx1050ti6.jpg';
import gtx1050ti_7 from './images/gpus/gtx1050ti/gtx1050ti7.jpg';

// latitide 6300u
import lat_6300u_1 from './images/laptops/laptop_6300u/laptop1.jpg';
import lat_6300u_2 from './images/laptops/laptop_6300u/laptop2.jpg';
import lat_6300u_3 from './images/laptops/laptop_6300u/laptop3.jpg';
import lat_6300u_4 from './images/laptops/laptop_6300u/laptop4.jpg';

// latitide 82500u
import lat_8250u_1 from './images/laptops/latitude_8250u/latitude82501.jpg';
import lat_8250u_2 from './images/laptops/latitude_8250u/latitude82502.jpg';
import lat_8250u_3 from './images/laptops/latitude_8250u/latitude82503.jpg';
import lat_8250u_4 from './images/laptops/latitude_8250u/latitude82504.jpg';
import lat_8250u_5 from './images/laptops/latitude_8250u/latitude82505.jpg';
import lat_8250u_6 from './images/laptops/latitude_8250u/latitude82506.jpg';

// optiplex 390
import opti390_1 from './images/desktops/optiplex_390/optiplex1.jpg';
import opti390_2 from './images/desktops/optiplex_390/optiplex2.jpg';
import opti390_3 from './images/desktops/optiplex_390/optiplex3.jpg';
import opti390_4 from './images/desktops/optiplex_390/optiplex4.jpg';

const rx570 = {
    id: 1,
    image: img570,
    alt: 'XFX RX 570 4GB',
    name: 'XFX RX 570 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1264MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '19,999',
    newPrice: '12,999',
    sold: false,
    allImages: [img570, img570_2],
};

const latitide6300uLaptop = {
    id: 2,
    image: lat_6300u_3,
    alt: 'Dell Latitude 7480',
    name: 'Dell Latitude 7480',
    type: 'Laptop',
    specs: [
        'i5 6300U @2.40GHZ',
        '8GB RAM',
        '256 SSD',
        '1920 * 1080 Resolution',
        'Windows 10 activated',
    ],
    price: '35,000',
    newPrice: '29,999',
    sold: false,
    allImages: [lat_6300u_2, lat_6300u_1, lat_6300u_4],
};

const latitide8250uLaptop = {
    id: 3,
    image: lat_8250u_1,
    alt: 'Dell Latitude 7490',
    name: 'Dell Latitude 7490',
    type: 'Laptop',
    specs: [
        'i5 8250U. 4 cores @1.70GHZ',
        '8GB RAM',
        '238 SSD',
        '1920 * 1080 Resolution',
        'Windows 11',
    ],
    price: '35,500',
    newPrice: '29,400',
    sold: false,
    allImages: [lat_8250u_2, lat_8250u_4, lat_8250u_6],
};

const optiplex390 = {
    id: 4,
    image: opti390_1,
    alt: 'Dell Optiplex 390',
    name: 'Dell Optiplex 390',
    type: 'Desktop',
    specs: [
        'i5 2400',
        '8GB RAM',
        '128 SSD + 500GB HDD',
        '4 Cores',
        'Windows 11',
    ],
    price: '35,500',
    newPrice: '29,400',
    sold: false,
    allImages: [opti390_2, opti390_3, opti390_4],
};

const gtx1050ti = {
    id: 5,
    image: gtx1050ti_1,
    alt: 'EVGA GTX 1050Ti 4GB',
    name: 'EVGA GTX 1050Ti 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1216MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '18,800',
    newPrice: '18,500',
    sold: true,
    allImages: [gtx1050ti_3, gtx1050ti_4, gtx1050ti_5, gtx1050ti_6, gtx1050ti_7],
};

const msi480_4gb = {
    id: 6,
    image: msi480_1,
    alt: 'MSI RX 480 4GB',
    name: 'MSI RX 480 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1303MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '18,500',
    newPrice: '14,500',
    sold: true,
    allImages: [msi480_1, msi480_2],
};

const aorus580 = {
    id: 7,
    image: aorus2,
    alt: 'Gigabyte RX 580 4GB',
    name: 'Gigabyte RX 580 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1340MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '16,999',
    newPrice: '15,500',
    sold: true,
    allImages: [aorus3, aorus1, aorus2, aorus, aorus4, aorus5],
};

const msi580_8gb = {
    id: 8,
    image: msi580_2,
    alt: 'MSI RX 580 8GB',
    name: 'MSI RX 580 8GB',
    type: 'Graphics Card',
    specs: [
        '8GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1380MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '23,000',
    newPrice: '18,500',
    sold: true,
    allImages: [msi580_1, msi580_2, msi580_3, msi580_4],
};

const xfx580_4gb = {
    id: 9,
    image: xfx1,
    alt: 'XFX RX 580 4GB',
    name: 'XFX RX 580 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1405MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '19,900',
    newPrice: '15,000',
    sold: true,
    allImages: [xfx1, xfx2, xfx3],
};

const gtx970_gpu = {
    id: 10,
    image: gtx970_1,
    alt: 'ZOTAC GTX 970 4GB',
    name: 'ZOTAC GTX 970 4GB',
    type: 'Graphics Card',
    specs: [
        '4GB memory size',
        'DDR5 memory type',
        '256 bit memory bus',
        '1216MHz core clock',
        'PCIE 3.0 x 16 bus interface',
    ],
    price: '17,500',
    newPrice: '13,800',
    sold: true,
    allImages: [gtx970_1, gtx970_3, gtx970_5],
};

export const myStock = [
    rx570,
    latitide6300uLaptop,
    latitide8250uLaptop,
    optiplex390,
    gtx1050ti,
    msi480_4gb,
    aorus580,
    msi580_8gb,
    xfx580_4gb,
    gtx970_gpu,
];