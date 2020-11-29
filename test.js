const airLogger = require('./lib');

const mock1 = [
    {
        id: 1,
        first_name: 'Arline',
        last_name: 'McQuillin',
        email: 'amcquillin0@netvibes.com',
        gender: 'Female',
        ip_address: {
            id: 2,
            first_name: 'Farr',
            last_name: 'Godfray',
            email: 'fgodfray1@smugmug.com',
            gender: 'Male',
            ip_address: {
                id: 3,
                first_name: 'Joshua',
                last_name: 'Reilinger',
                email: 'jreilinger2@google.com',
                gender: 'Male',
                ip_address: {
                    id: 4,
                    first_name: 'Bart',
                    last_name: 'Fetherstan',
                    email: 'bfetherstan3@geocities.com',
                    gender: 'Male',
                    ip_address: {
                        id: 5,
                        first_name: 'Camella',
                        last_name: 'Loseby',
                        email: 'closeby4@washington.edu',
                        gender: 'Female',
                        ip_address: {
                            id: 5,
                            first_name: 'Camella',
                            last_name: 'Loseby',
                            email: 'closeby4@washington.edu',
                            gender: 'Female',
                            ip_address: {
                                id: 5,
                                first_name: 'Camella',
                                last_name: 'Loseby',
                                email: 'closeby4@washington.edu',
                                gender: 'Female',
                                ip_address: {
                                    id: 5,
                                    first_name: 'Camella',
                                    last_name: 'Loseby',
                                    email: 'closeby4@washington.edu',
                                    gender: 'Female',
                                    ip_address: '66.196.141.123',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    {
        id: 5,
        first_name: 'Camella',
        last_name: 'Loseby',
        email: 'closeby4@washington.edu',
        gender: 'Female',
        ip_address: '66.196.141.123',
    },
    {
        id: 6,
        first_name: 'Roddy',
        last_name: 'Perulli',
        email: 'rperulli5@ted.com',
        gender: 'Male',
        ip_address: '192.121.228.73',
    },
    {
        id: 7,
        first_name: 'Carey',
        last_name: 'Chedzoy',
        email: 'cchedzoy6@nasa.gov',
        gender: 'Female',
        ip_address: '158.49.223.113',
    },
    {
        id: 8,
        first_name: 'Andonis',
        last_name: 'Rennie',
        email: 'arennie7@archive.org',
        gender: 'Male',
        ip_address: '53.101.254.60',
    },
    {
        id: 9,
        first_name: 'Anett',
        last_name: 'Caff',
        email: 'acaff8@bloglines.com',
        gender: 'Female',
        ip_address: '143.212.62.4',
    },
    {
        id: 10,
        first_name: 'Zacharie',
        last_name: 'Rosier',
        email: 'zrosier9@ocn.ne.jp',
        gender: 'Male',
        ip_address: '158.19.138.110',
    },
    {
        id: 11,
        first_name: 'Kevan',
        last_name: 'Gammet',
        email: 'kgammeta@forbes.com',
        gender: 'Male',
        ip_address: '251.75.169.152',
    },
    {
        id: 12,
        first_name: 'Aubrette',
        last_name: 'Rottery',
        email: 'arotteryb@youku.com',
        gender: 'Female',
        ip_address: '146.89.70.122',
    },
    {
        id: 13,
        first_name: 'Knox',
        last_name: 'McDonand',
        email: 'kmcdonandc@cpanel.net',
        gender: 'Male',
        ip_address: '94.211.193.11',
    },
    {
        id: 14,
        first_name: 'Marysa',
        last_name: 'Wynett',
        email: 'mwynettd@toplist.cz',
        gender: 'Female',
        ip_address: '61.71.177.159',
    },
    {
        id: 15,
        first_name: 'Griz',
        last_name: 'Smallpeace',
        email: 'gsmallpeacee@hostgator.com',
        gender: 'Male',
        ip_address: '11.46.202.109',
    },
    {
        id: 16,
        first_name: 'Shermie',
        last_name: 'Plunkett',
        email: 'splunkettf@ebay.co.uk',
        gender: 'Male',
        ip_address: '94.49.169.137',
    },
    {
        id: 17,
        first_name: 'Caroljean',
        last_name: 'Joubert',
        email: 'cjoubertg@elegantthemes.com',
        gender: 'Female',
        ip_address: '78.184.27.110',
    },
    {
        id: 18,
        first_name: 'Jehu',
        last_name: 'Conibear',
        email: 'jconibearh@senate.gov',
        gender: 'Male',
        ip_address: '0.106.246.19',
    },
    {
        id: 19,
        first_name: 'Frans',
        last_name: 'Kenwyn',
        email: 'fkenwyni@biglobe.ne.jp',
        gender: 'Male',
        ip_address: '194.24.176.180',
    },
    {
        id: 20,
        first_name: 'Mead',
        last_name: 'Clouter',
        email: 'mclouterj@cloudflare.com',
        gender: 'Male',
        ip_address: '177.89.247.84',
    },
];

airLogger.init();
console.air = airLogger;

console.air.log(mock1);
console.air.log(123);
console.air.log('123');
console.air.log([123, 123, 'ad', { a: 1 }]);
console.air.log(123, 'sd');
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     console.air.log(mock1);
//     console.air.log(123);
//     console.air.log('123');
//     console.air.log([123, 123, 'ad', { a: 1 }]);
//     console.air.log(123, 'sd');
// }
