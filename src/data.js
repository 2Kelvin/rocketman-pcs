// xfx 570 4gb
import img570 from './images/gpus/xfx_570_4gb/570.jpg';
import img570_2 from './images/gpus/xfx_570_4gb/570_2.jpg';

// msi 480 4gb
import msi480_1 from './images/gpus/msi480_4gb/rx480.png';

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
    allImages: [msi480_1],
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
    allImages: [aorus, aorus1, aorus2, aorus3, aorus4, aorus5],
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

export const myStock = [
    rx570,
    msi480_4gb,
    aorus580,
    msi580_8gb,
    xfx580_4gb,
    gtx970_gpu,
];