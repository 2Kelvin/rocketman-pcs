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

const msi480_4gb = {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

const gtx1050ti = {
    id: 7,
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

const latitide6300uLaptop = {
    id: 8,
    image: lat_6300u_1,
    alt: 'Dell Latitude 6300U',
    name: 'Dell Latitude 6300U',
    type: 'Laptop',
    specs: [
        'i5 6300U @2.4 GHZ',
        '8GB RAM',
        '256 SSD',
        '1920 * 1080 Resolution',
        'Windows 10 activated',
    ],
    price: '34,000',
    newPrice: '29,999',
    sold: true,
    allImages: [lat_6300u_2, lat_6300u_3, lat_6300u_4],
};

const latitide8250uLaptop = {
    id: 9,
    image: lat_6300u_1,
    alt: 'Dell Latitude 7490',
    name: 'Dell Latitude 7490',
    type: 'Laptop',
    specs: [
        'i5 8250U',
        '8GB RAM',
        '238 SSD',
        '1920 * 1080 Resolution',
        'Windows 11 activated',
    ],
    price: '29,400',
    newPrice: '35,500',
    sold: true,
    allImages: [lat_6300u_2, lat_6300u_3, lat_6300u_4],
};

export const myStock = [
    rx570,
    msi480_4gb,
    aorus580,
    msi580_8gb,
    xfx580_4gb,
    gtx970_gpu,
    gtx1050ti,
    latitide6300uLaptop,
];