import dpdImg from '../../assets/images/dpd.png';
import hermesImg from '../../assets/images/hermes.png';
import percelforceImg from '../../assets/images/parcelforce.png';
import royalmailImg from '../../assets/images/royalmail.png';
import scansImg from '../../assets/images/scanv2.png';
import upsserviceImg from '../../assets/images/ups.png';

const products = [
    {
        id: 'royal-mail',
        img: royalmailImg,
        title: 'Royal Mail',
        description: 'Everything Royal mail related',
        services: [
            {
                id: 1,
                title: 'Royal Mail Label',
                description: 'descripttion not avilable',
                price: 3,
                quantity: 0,
            },
            {
                id: 2,
                title: 'Royal Mail QR',
                description: 'descripttion not avilable',
                price: 4,
                quantity: 0,
            },
            {
                id: 3,
                title: 'Royal Mail Insider',
                description: '',
                price: 5,
                quantity: 0,
            },
            {
                id: 4,
                title: 'Royal Mail RTS',
                description: 'descripttion not avilable',
                price: 5,
                quantity: 0,
            },
        ],
    },
    {
        id: 'evri-hermes',
        img: hermesImg,
        title: 'Evri Hermes',
        description: 'Evri/Hermes',
        services: [
            {
                id: 5,
                title: 'Hermes/Evri QR',
                description: 'descripttion not avilable',
                price: 3,
                quantity: 0,
            },
        ],
    },
    {
        id: 'UPS-services',
        img: upsserviceImg,
        title: 'UPS',
        description: 'Everything UPS related',
        services: [
            {
                id: 6,
                title: 'UPS Regular',
                description: 'descripttion not avilable',
                price: 3,
                quantity: 0,
            },
            {
                id: 7,
                title: 'UPS FTIDNA ',
                description: 'descripttion not avilable',
                price: 6,
                quantity: 0,
            },
        ],
    },
    {
        id: 'scans',
        img: scansImg,
        title: 'Scans',
        description: 'Our scan services',
        services: [
            {
                id: 8,
                title: 'Amazon Pay to Send',
                description: '',
                price: 6,
                quantity: 0,
            },
            {
                id: 11,
                title: 'Yodel Insider Return LIT',
                description: 'descripttion not avilable',
                price: 14,
                quantity: 0,
            },
            {
                id: 15,
                title: 'DPD Damaged',
                description: 'descripttion not avilable',
                price: 10,
                quantity: 0,
            },
            {
                id: 16,
                title: 'DPD LIT',
                description: 'descripttion not avilable',
                price: 10,
                quantity: 0,
            },
            {
                id: 17,
                title: 'DPD Delivery',
                description: 'descripttion not avilable',
                price: 14,
                quantity: 0,
            },
            {
                id: 18,
                title: 'DPD RTS',
                description: 'descripttion not avilable',
                price: 16,
                quantity: 0,
            },
        ],
    },
    {
        id: 'percelforce-worldwide',
        img: percelforceImg,
        title: 'ParcelForce',
        description: 'Everything ParcelForce related',
        services: [
            {
                id: 9,
                title: 'Parcelforce Worldwide',
                description: 'descripttion not avilable',
                price: 3.5,
                quantity: 0,
            },
            {
                id: 10,
                title: 'Parcelforce Insider FTIDNA',
                description: 'descripttion not avilable',
                price: 5.5,
                quantity: 0,
            },
        ],
    },
    {
        id: 'dpd',
        img: dpdImg,
        title: 'DPD',
        description: 'Everything DPD related',
        services: [
            {
                id: 12,
                title: 'DPD Standard Edit',
                description: 'descripttion not avilable',
                price: 3,
                quantity: 0,
            },
            {
                id: 13,
                title: 'DPD Deluxe',
                description: 'descripttion not avilable',
                price: 6.5,
                quantity: 0,
            },
            {
                id: 14,
                title: 'DPD Pickup',
                description: 'descripttion not avilable',
                price: 10,
                quantity: 0,
            },
        ],
    },
];

export default products;
