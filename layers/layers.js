var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Vulcan_1 = new ol.format.GeoJSON();
var features_Vulcan_1 = format_Vulcan_1.readFeatures(json_Vulcan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vulcan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vulcan_1.addFeatures(features_Vulcan_1);
var lyr_Vulcan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vulcan_1, 
                style: style_Vulcan_1,
                popuplayertitle: 'Vulcan',
                interactive: true,
                title: '<img src="styles/legend/Vulcan_1.png" /> Vulcan'
            });
var format_CRH_2 = new ol.format.GeoJSON();
var features_CRH_2 = format_CRH_2.readFeatures(json_CRH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRH_2.addFeatures(features_CRH_2);
var lyr_CRH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRH_2, 
                style: style_CRH_2,
                popuplayertitle: 'CRH',
                interactive: true,
                title: '<img src="styles/legend/CRH_2.png" /> CRH'
            });
var format_MartinMarietta_3 = new ol.format.GeoJSON();
var features_MartinMarietta_3 = format_MartinMarietta_3.readFeatures(json_MartinMarietta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MartinMarietta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MartinMarietta_3.addFeatures(features_MartinMarietta_3);
var lyr_MartinMarietta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MartinMarietta_3, 
                style: style_MartinMarietta_3,
                popuplayertitle: 'Martin Marietta',
                interactive: true,
                title: '<img src="styles/legend/MartinMarietta_3.png" /> Martin Marietta'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Vulcan_1.setVisible(true);lyr_CRH_2.setVisible(true);lyr_MartinMarietta_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Vulcan_1,lyr_CRH_2,lyr_MartinMarietta_3];
lyr_Vulcan_1.set('fieldAliases', {'fid': 'fid', 'country': 'country', 'id': 'id', 'distance': 'distance', 'plantName': 'plantName', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'phone': 'phone', 'url': 'url', 'summary': 'summary', 'description': 'description', 'plantCode': 'plantCode', 'division': 'division', 'location': 'location', 'lob': 'lob', 'latitude': 'latitude', 'longitude': 'longitude', 'plantType': 'plantType', 'gmArea': 'gmArea', 'salesDistrict': 'salesDistrict', 'contactType': 'contactType', 'email': 'email', 'firstName': 'firstName', 'lastName': 'lastName', });
lyr_CRH_2.set('fieldAliases', {'fid': 'fid', 'objectId': 'objectId', 'renderOrder': 'renderOrder', 'publishStatus': 'publishStatus', 'region': 'region', 'company': 'company', 'siteName': 'siteName', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'products': 'products', 'website': 'website', 'latitude': 'latitude', 'longitude': 'longitude', 'country': 'country', 'code': 'code', });
lyr_MartinMarietta_3.set('fieldAliases', {'fid': 'fid', 'facilityId': 'facilityId', 'districtId': 'districtId', 'divisionId': 'divisionId', 'name': 'name', 'description': 'description', 'descriptionHeadline': 'descriptionHeadline', 'title': 'title', 'subTitle': 'subTitle', 'contactName': 'contactName', 'contactTitle': 'contactTitle', 'contactEmail': 'contactEmail', 'contactPhone': 'contactPhone', 'secondaryContactName': 'secondaryContactName', 'secondaryContactTitle': 'secondaryContactTitle', 'secondaryContactEmail': 'secondaryContactEmail', 'secondaryContactPhone': 'secondaryContactPhone', 'creditApplicationUrl': 'creditApplicationUrl', 'hoursOfOperation': 'hoursOfOperation', 'operationCommentEmail': 'operationCommentEmail', 'latitude': 'latitude', 'longitude': 'longitude', 'officePhone': 'officePhone', 'productCodesList': 'productCodesList', 'productDisplayOverride': 'productDisplayOverride', 'productsAvailable': 'productsAvailable', 'railwayAccess': 'railwayAccess', 'seoKeywords': 'seoKeywords', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'geoLocation': 'geoLocation', 'facilityKey': 'facilityKey', 'hyperlink': 'hyperlink', 'businessUnit': 'businessUnit', 'divisionKey': 'divisionKey', 'divisionName': 'divisionName', 'divisionPhone': 'divisionPhone', 'districtKey': 'districtKey', 'districtName': 'districtName', 'districtPhone': 'districtPhone', 'salesDistributionEmail': 'salesDistributionEmail', });
lyr_Vulcan_1.set('fieldImages', {'fid': 'TextEdit', 'country': 'TextEdit', 'id': 'Range', 'distance': 'TextEdit', 'plantName': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'phone': 'TextEdit', 'url': 'TextEdit', 'summary': 'TextEdit', 'description': 'TextEdit', 'plantCode': 'TextEdit', 'division': 'TextEdit', 'location': 'Range', 'lob': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'plantType': 'TextEdit', 'gmArea': 'TextEdit', 'salesDistrict': 'TextEdit', 'contactType': 'TextEdit', 'email': 'TextEdit', 'firstName': 'TextEdit', 'lastName': 'TextEdit', });
lyr_CRH_2.set('fieldImages', {'fid': '', 'objectId': '', 'renderOrder': '', 'publishStatus': '', 'region': '', 'company': '', 'siteName': '', 'address': '', 'city': '', 'state': '', 'zip': '', 'products': '', 'website': '', 'latitude': '', 'longitude': '', 'country': '', 'code': '', });
lyr_MartinMarietta_3.set('fieldImages', {'fid': '', 'facilityId': '', 'districtId': '', 'divisionId': '', 'name': '', 'description': '', 'descriptionHeadline': '', 'title': '', 'subTitle': '', 'contactName': '', 'contactTitle': '', 'contactEmail': '', 'contactPhone': '', 'secondaryContactName': '', 'secondaryContactTitle': '', 'secondaryContactEmail': '', 'secondaryContactPhone': '', 'creditApplicationUrl': '', 'hoursOfOperation': '', 'operationCommentEmail': '', 'latitude': '', 'longitude': '', 'officePhone': '', 'productCodesList': '', 'productDisplayOverride': '', 'productsAvailable': '', 'railwayAccess': '', 'seoKeywords': '', 'address': '', 'city': '', 'state': '', 'zip': '', 'geoLocation': '', 'facilityKey': '', 'hyperlink': '', 'businessUnit': '', 'divisionKey': '', 'divisionName': '', 'divisionPhone': '', 'districtKey': '', 'districtName': '', 'districtPhone': '', 'salesDistributionEmail': '', });
lyr_Vulcan_1.set('fieldLabels', {'fid': 'hidden field', 'country': 'hidden field', 'id': 'hidden field', 'distance': 'hidden field', 'plantName': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'phone': 'no label', 'url': 'hidden field', 'summary': 'hidden field', 'description': 'hidden field', 'plantCode': 'hidden field', 'division': 'no label', 'location': 'hidden field', 'lob': 'hidden field', 'latitude': 'no label', 'longitude': 'no label', 'plantType': 'no label', 'gmArea': 'no label', 'salesDistrict': 'no label', 'contactType': 'no label', 'email': 'no label', 'firstName': 'no label', 'lastName': 'no label', });
lyr_CRH_2.set('fieldLabels', {'fid': 'hidden field', 'objectId': 'hidden field', 'renderOrder': 'hidden field', 'publishStatus': 'hidden field', 'region': 'no label', 'company': 'no label', 'siteName': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'products': 'no label', 'website': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'country': 'hidden field', 'code': 'hidden field', });
lyr_MartinMarietta_3.set('fieldLabels', {'fid': 'hidden field', 'facilityId': 'no label', 'districtId': 'hidden field', 'divisionId': 'hidden field', 'name': 'no label', 'description': 'no label', 'descriptionHeadline': 'no label', 'title': 'no label', 'subTitle': 'no label', 'contactName': 'no label', 'contactTitle': 'no label', 'contactEmail': 'no label', 'contactPhone': 'no label', 'secondaryContactName': 'no label', 'secondaryContactTitle': 'no label', 'secondaryContactEmail': 'no label', 'secondaryContactPhone': 'no label', 'creditApplicationUrl': 'no label', 'hoursOfOperation': 'no label', 'operationCommentEmail': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'officePhone': 'no label', 'productCodesList': 'no label', 'productDisplayOverride': 'no label', 'productsAvailable': 'no label', 'railwayAccess': 'no label', 'seoKeywords': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'geoLocation': 'no label', 'facilityKey': 'no label', 'hyperlink': 'no label', 'businessUnit': 'hidden field', 'divisionKey': 'hidden field', 'divisionName': 'hidden field', 'divisionPhone': 'no label', 'districtKey': 'hidden field', 'districtName': 'no label', 'districtPhone': 'no label', 'salesDistributionEmail': 'no label', });
lyr_MartinMarietta_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});