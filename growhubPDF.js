function generatePDF() {
    var docDefinition = {
        content: [
            { text: 'FAKTURA', style: 'header' },
            {
                columns: [
                    [
                        { text: 'Growhub Ekonomisk Förening', style: 'organization' },
                        { text: 'Per Gummessons väg 5', style: 'address' },
                        { text: '268 68 Röstånga', style: 'address' },
                        { text: 'Org.nr 7696388193', style: 'address' },
                        { text: 'VAT-nr SE769638819301', style: 'address' },
                        { text: 'Godkänd för F-skatt', style: 'address' },
                        { text: 'Bankgiro: 5517-9477', style: 'bankDetails' },
                        { text: 'OCR-nummer: 2024041910', style: 'bankDetails' },
                    ],
                    [
                        { text: 'Faktura till:', style: 'invoiceToLabel' },
                        { text: 'Evalpart AB', style: 'clientName' },
                        { text: 'BJÖRNBÄRSSTIGEN 8', style: 'clientAddress' },
                        { text: '26868 Röstånga', style: 'clientAddress' },
                        { text: 'Mottagare skattenummer: SE559009554201', style: 'address' },
                        { text: 'Mottagare epost: esc@evalpart.se', style: 'address' },
                        { text: 'Fakturanummer/OCR: 2024041910', style: 'address' },
                        { text: 'Fakturadatum: 2024-04-19', style: 'address' },
                        { text: 'Förfallodatum: 2024-04-29', style: 'address' },
                        { text: 'Kundreferens: Christian Stenqvist', style: 'address' },
                        { text: 'Dröjesmålsränta: 15%', style: 'address' }
                    ]
                ]
            },
            { text: 'Beskrivning', style: 'tableHeader', margin: [0, 20, 0, 10] },
            {
                style: 'itemsTable',
                table: {
                    headerRows: 1,
                    widths: ['*', 100],
                    body: [
                        [{ text: 'Kontorsplats - Maj', style: 'itemsHeader' }, { text: '1300 kr', style: 'cost' }],
                        [{ text: 'Moms (25%)', style: 'itemsHeader' }, { text: '325 kr', style: 'cost' }],
                        [{ text: 'Totalt:', style: 'totalLabel' }, { text: '1625 kr', style: 'totalCost' }]
                    ]
                },
                layout: 'lightHorizontalLines'
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20]
            },
            organization: {
                bold: true,
                fontSize: 14,
                margin: [0, 0, 0, 5]
            },
            address: {
                margin: [0, 2, 0, 2]
            },
            bankDetails: {
                margin: [0, 5, 0, 5],
                fontSize: 10
            },
            invoiceToLabel: {
                bold: true,
                fontSize: 12,
                margin: [0, 0, 0, 10]
            },
            clientName: {
                bold: true,
                fontSize: 14,
                margin: [0, 0, 0, 5]
            },
            clientAddress: {
                margin: [0, 2, 0, 2]
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                alignment: 'left'
            },
            itemsTable: {
                margin: [0, 5, 0, 15]
            },
            itemsHeader: {
                fontSize: 10,
                bold: true,
                margin: [0, 5, 0, 5]
            },
            cost: {
                fontSize: 10,
                alignment: 'right',
                margin: [0, 5, 0, 5]
            },
            totalLabel: {
                bold: true,
                fontSize: 12,
                margin: [0, 5, 0, 5]
            },
            totalCost: {
                bold: true,
                fontSize: 12,
                alignment: 'right',
                margin: [0, 5, 0, 5]
            }
        }
    };

    pdfMake.createPdf(docDefinition).download('styled-invoice.pdf');
}