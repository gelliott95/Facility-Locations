var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Vulcan_2 = new ol.format.GeoJSON();
var features_Vulcan_2 = format_Vulcan_2.readFeatures(json_Vulcan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vulcan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vulcan_2.addFeatures(features_Vulcan_2);
var lyr_Vulcan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vulcan_2, 
                style: style_Vulcan_2,
                popuplayertitle: 'Vulcan',
                interactive: true,
    title: 'Vulcan<br />\
    <img src="styles/legend/Vulcan_2_0.png" /> Admin<br />\
    <img src="styles/legend/Vulcan_2_1.png" /> Aggregates<br />\
    <img src="styles/legend/Vulcan_2_2.png" /> Asphalt<br />\
    <img src="styles/legend/Vulcan_2_3.png" /> Building Materials<br />\
    <img src="styles/legend/Vulcan_2_4.png" /> Clean Construction Debris (CCDD)<br />\
    <img src="styles/legend/Vulcan_2_5.png" /> Ready Mix<br />\
    <img src="styles/legend/Vulcan_2_6.png" /> Recycled Materials<br />\
    <img src="styles/legend/Vulcan_2_7.png" /> Sand & Gravel<br />\
    <img src="styles/legend/Vulcan_2_8.png" /> Stone, Sand & Gravel<br />' });
var format_HeidelbergLocations_3 = new ol.format.GeoJSON();
var features_HeidelbergLocations_3 = format_HeidelbergLocations_3.readFeatures(json_HeidelbergLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeidelbergLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeidelbergLocations_3.addFeatures(features_HeidelbergLocations_3);
var lyr_HeidelbergLocations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeidelbergLocations_3, 
                style: style_HeidelbergLocations_3,
                popuplayertitle: 'Heidelberg',
                interactive: true,
    title: 'Heidelberg<br />\
    <img src="styles/legend/HeidelbergLocations_3_0.png" /> aggregates<br />\
    <img src="styles/legend/HeidelbergLocations_3_1.png" /> cement<br />\
    <img src="styles/legend/HeidelbergLocations_3_2.png" /> concrete-products<br />\
    <img src="styles/legend/HeidelbergLocations_3_3.png" /> construction<br />\
    <img src="styles/legend/HeidelbergLocations_3_4.png" /> hot-mix-asphalt<br />\
    <img src="styles/legend/HeidelbergLocations_3_5.png" /> office<br />\
    <img src="styles/legend/HeidelbergLocations_3_6.png" /> other-services<br />\
    <img src="styles/legend/HeidelbergLocations_3_7.png" /> ready-mixed-concrete<br />\
    <img src="styles/legend/HeidelbergLocations_3_8.png" /> recycling<br />\
    <img src="styles/legend/HeidelbergLocations_3_9.png" /> stabilized-sand<br />' });
var format_RogersLocations_4 = new ol.format.GeoJSON();
var features_RogersLocations_4 = format_RogersLocations_4.readFeatures(json_RogersLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RogersLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RogersLocations_4.addFeatures(features_RogersLocations_4);
var lyr_RogersLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RogersLocations_4, 
                style: style_RogersLocations_4,
                popuplayertitle: 'Rogers',
                interactive: true,
    title: 'Rogers<br />\
    <img src="styles/legend/RogersLocations_4_0.png" /> Administrative Office<br />\
    <img src="styles/legend/RogersLocations_4_1.png" /> Asphalt<br />\
    <img src="styles/legend/RogersLocations_4_2.png" /> Construction Aggregates<br />\
    <img src="styles/legend/RogersLocations_4_3.png" /> Ready Mix<br />\
    <img src="styles/legend/RogersLocations_4_4.png" /> Resale Yard<br />\
    <img src="styles/legend/RogersLocations_4_5.png" /> Road Construction & Paving<br />\
    <img src="styles/legend/RogersLocations_4_6.png" /> Sand<br />\
    <img src="styles/legend/RogersLocations_4_7.png" /> Specialty Products<br />\
    <img src="styles/legend/RogersLocations_4_8.png" /> Trucking<br />' });
var format_CRH_5 = new ol.format.GeoJSON();
var features_CRH_5 = format_CRH_5.readFeatures(json_CRH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRH_5.addFeatures(features_CRH_5);
var lyr_CRH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRH_5, 
                style: style_CRH_5,
                popuplayertitle: 'CRH',
                interactive: true,
    title: 'CRH<br />\
    <img src="styles/legend/CRH_5_0.png" /> Aggregates<br />\
    <img src="styles/legend/CRH_5_1.png" /> Aggregates;Ready-Mixed Concrete<br />\
    <img src="styles/legend/CRH_5_2.png" /> Asphalt<br />\
    <img src="styles/legend/CRH_5_3.png" /> Asphalt;Aggregates<br />\
    <img src="styles/legend/CRH_5_4.png" /> Asphalt;Aggregates;Ready-Mixed Concrete<br />\
    <img src="styles/legend/CRH_5_5.png" /> Asphalt;Ready-Mixed Concrete<br />\
    <img src="styles/legend/CRH_5_6.png" /> Ready-Mixed Concrete<br />' });
var format_MartinMarietta_6 = new ol.format.GeoJSON();
var features_MartinMarietta_6 = format_MartinMarietta_6.readFeatures(json_MartinMarietta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MartinMarietta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MartinMarietta_6.addFeatures(features_MartinMarietta_6);
var lyr_MartinMarietta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MartinMarietta_6, 
                style: style_MartinMarietta_6,
                popuplayertitle: 'Martin Marietta',
                interactive: true,
    title: 'Martin Marietta<br />\
    <img src="styles/legend/MartinMarietta_6_0.png" /> Aggregates<br />\
    <img src="styles/legend/MartinMarietta_6_1.png" /> Asphalt<br />\
    <img src="styles/legend/MartinMarietta_6_2.png" /> Asphalt Cement<br />\
    <img src="styles/legend/MartinMarietta_6_3.png" /> Dolomitic Lime<br />\
    <img src="styles/legend/MartinMarietta_6_4.png" /> Magnesia<br />\
    <img src="styles/legend/MartinMarietta_6_5.png" /> Ready Mixed Concrete<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Vulcan_2.setVisible(true);lyr_HeidelbergLocations_3.setVisible(true);lyr_RogersLocations_4.setVisible(true);lyr_CRH_5.setVisible(true);lyr_MartinMarietta_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_Vulcan_2,lyr_HeidelbergLocations_3,lyr_RogersLocations_4,lyr_CRH_5,lyr_MartinMarietta_6];
lyr_Vulcan_2.set('fieldAliases', {'fid': 'fid', 'country': 'country', 'id': 'id', 'distance': 'distance', 'plantName': 'plantName', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'phone': 'phone', 'url': 'url', 'summary': 'summary', 'description': 'description', 'plantCode': 'plantCode', 'division': 'division', 'location': 'location', 'lob': 'lob', 'latitude': 'latitude', 'longitude': 'longitude', 'plantType': 'plantType', 'gmArea': 'gmArea', 'salesDistrict': 'salesDistrict', 'contactType': 'contactType', 'email': 'email', 'firstName': 'firstName', 'lastName': 'lastName', });
lyr_HeidelbergLocations_3.set('fieldAliases', {'fid': 'fid', 'FacilityName': 'FacilityName', 'FacilityID': 'FacilityID', 'StreetAddress': 'StreetAddress', 'StreetAddress2': 'StreetAddress2', 'City': 'City', 'StateProvince': 'StateProvince', 'ZipPostalCode': 'ZipPostalCode', 'CountryCode': 'CountryCode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LocationID': 'LocationID', 'FacilityPhoneExtension': 'FacilityPhoneExtension', 'CompanyName': 'CompanyName', 'GeneralSalesPhone': 'GeneralSalesPhone', 'GeneralSalesPhoneNumberExtension': 'GeneralSalesPhoneNumberExtension', 'SalesName': 'SalesName', 'SalesPhone': 'SalesPhone', 'SalesPhoneNumberExtension': 'SalesPhoneNumberExtension', 'SalesName2': 'SalesName2', 'SalesPhone2': 'SalesPhone2', 'SalesPhoneNumberExtension2': 'SalesPhoneNumberExtension2', 'SalesEmail': 'SalesEmail', 'FacilityPhone': 'FacilityPhone', 'DispatchPhone': 'DispatchPhone', 'HoursOfOperation': 'HoursOfOperation', 'Notes': 'Notes', 'WebsiteUrl': 'WebsiteUrl', 'Products': 'Products', 'Distance': 'Distance', 'FilterText': 'FilterText', 'FilterHexColorCode': 'FilterHexColorCode', 'Image': 'Image', 'OperatingStatus': 'OperatingStatus', 'Description': 'Description', 'PinPriority': 'PinPriority', 'AdvancedContactPage': 'AdvancedContactPage', 'Mu': 'Mu', 'Region': 'Region', 'Category': 'Category', });
lyr_RogersLocations_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'lat': 'lat', 'lng': 'lng', 'phone': 'phone', 'email': 'email', 'url': 'url', 'slug': 'slug', 'visible': 'visible', 'marker_id': 'marker_id', 'address': 'address', 'display_address': 'display_address', 'address_line_1': 'address_line_1', 'address_line_2': 'address_line_2', 'city': 'city', 'state': 'state', 'postcode': 'postcode', 'country': 'country', 'location_type_id': 'location_type_id', 'image_url': 'image_url', 'timezone': 'timezone', 'facebook': 'facebook', 'instagram': 'instagram', 'x_twitter': 'x_twitter', 'yelp_id': 'yelp_id', 'location_type_name': 'location_type_name', 'priority': 'priority', 'location_type_show_label': 'location_type_show_label', 'marker_image': 'marker_image', 'mon': 'mon', 'tue': 'tue', 'wed': 'wed', 'thu': 'thu', 'fri': 'fri', 'sat': 'sat', 'sun': 'sun', 'filters/0/id': 'filters/0/id', 'filters/0/name': 'filters/0/name', 'filters/0/color': 'filters/0/color', 'filters/0/icon': 'filters/0/icon', 'filters/0/pivot_store_id': 'filters/0/pivot_store_id', 'filters/0/hidden': 'filters/0/hidden', 'filters/1/id': 'filters/1/id', 'filters/1/name': 'filters/1/name', 'filters/1/color': 'filters/1/color', 'filters/1/icon': 'filters/1/icon', 'filters/1/pivot_store_id': 'filters/1/pivot_store_id', 'filters/1/hidden': 'filters/1/hidden', 'fields/0/id': 'fields/0/id', 'fields/0/name': 'fields/0/name', 'fields/0/pivot_store_id': 'fields/0/pivot_store_id', 'fields/0/pivot_field_id': 'fields/0/pivot_field_id', 'fields/0/pivot_field_value': 'fields/0/pivot_field_value', 'cover_image': 'cover_image', 'locationType/id': 'locationType/id', 'locationType/name': 'locationType/name', 'locationType/priority': 'locationType/priority', 'locationType/show_label': 'locationType/show_label', 'marker/id': 'marker/id', 'marker/image': 'marker/image', 'hours/mon': 'hours/mon', 'hours/tue': 'hours/tue', 'hours/wed': 'hours/wed', 'hours/thu': 'hours/thu', 'hours/fri': 'hours/fri', 'hours/sat': 'hours/sat', 'hours/sun': 'hours/sun', 'obf_id': 'obf_id', 'filters/2/id': 'filters/2/id', 'filters/2/name': 'filters/2/name', 'filters/2/color': 'filters/2/color', 'filters/2/icon': 'filters/2/icon', 'filters/2/pivot_store_id': 'filters/2/pivot_store_id', 'filters/2/hidden': 'filters/2/hidden', 'filters/3/id': 'filters/3/id', 'filters/3/name': 'filters/3/name', 'filters/3/color': 'filters/3/color', 'filters/3/icon': 'filters/3/icon', 'filters/3/pivot_store_id': 'filters/3/pivot_store_id', 'filters/3/hidden': 'filters/3/hidden', 'filters/4/id': 'filters/4/id', 'filters/4/name': 'filters/4/name', 'filters/4/color': 'filters/4/color', 'filters/4/icon': 'filters/4/icon', 'filters/4/pivot_store_id': 'filters/4/pivot_store_id', 'filters/4/hidden': 'filters/4/hidden', 'filters/5/id': 'filters/5/id', 'filters/5/name': 'filters/5/name', 'filters/5/color': 'filters/5/color', 'filters/5/icon': 'filters/5/icon', 'filters/5/pivot_store_id': 'filters/5/pivot_store_id', 'filters/5/hidden': 'filters/5/hidden', });
lyr_CRH_5.set('fieldAliases', {'fid': 'fid', 'objectId': 'objectId', 'renderOrder': 'renderOrder', 'publishStatus': 'publishStatus', 'region': 'region', 'company': 'company', 'siteName': 'siteName', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'products': 'products', 'website': 'website', 'latitude': 'latitude', 'longitude': 'longitude', 'country': 'country', 'code': 'code', });
lyr_MartinMarietta_6.set('fieldAliases', {'fid': 'fid', 'facilityId': 'facilityId', 'districtId': 'districtId', 'divisionId': 'divisionId', 'name': 'name', 'description': 'description', 'descriptionHeadline': 'descriptionHeadline', 'title': 'title', 'subTitle': 'subTitle', 'contactName': 'contactName', 'contactTitle': 'contactTitle', 'contactEmail': 'contactEmail', 'contactPhone': 'contactPhone', 'secondaryContactName': 'secondaryContactName', 'secondaryContactTitle': 'secondaryContactTitle', 'secondaryContactEmail': 'secondaryContactEmail', 'secondaryContactPhone': 'secondaryContactPhone', 'creditApplicationUrl': 'creditApplicationUrl', 'hoursOfOperation': 'hoursOfOperation', 'operationCommentEmail': 'operationCommentEmail', 'latitude': 'latitude', 'longitude': 'longitude', 'officePhone': 'officePhone', 'productCodesList': 'productCodesList', 'productDisplayOverride': 'productDisplayOverride', 'productsAvailable': 'productsAvailable', 'railwayAccess': 'railwayAccess', 'seoKeywords': 'seoKeywords', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'geoLocation': 'geoLocation', 'facilityKey': 'facilityKey', 'hyperlink': 'hyperlink', 'businessUnit': 'businessUnit', 'divisionKey': 'divisionKey', 'divisionName': 'divisionName', 'divisionPhone': 'divisionPhone', 'districtKey': 'districtKey', 'districtName': 'districtName', 'districtPhone': 'districtPhone', 'salesDistributionEmail': 'salesDistributionEmail', });
lyr_Vulcan_2.set('fieldImages', {'fid': 'TextEdit', 'country': 'TextEdit', 'id': 'Range', 'distance': 'TextEdit', 'plantName': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'phone': 'TextEdit', 'url': 'TextEdit', 'summary': 'TextEdit', 'description': 'TextEdit', 'plantCode': 'TextEdit', 'division': 'TextEdit', 'location': 'Range', 'lob': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'plantType': 'TextEdit', 'gmArea': 'TextEdit', 'salesDistrict': 'TextEdit', 'contactType': 'TextEdit', 'email': 'TextEdit', 'firstName': 'TextEdit', 'lastName': 'TextEdit', });
lyr_HeidelbergLocations_3.set('fieldImages', {'fid': 'TextEdit', 'FacilityName': 'TextEdit', 'FacilityID': 'TextEdit', 'StreetAddress': 'TextEdit', 'StreetAddress2': 'TextEdit', 'City': 'TextEdit', 'StateProvince': 'TextEdit', 'ZipPostalCode': 'TextEdit', 'CountryCode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LocationID': 'TextEdit', 'FacilityPhoneExtension': 'TextEdit', 'CompanyName': 'TextEdit', 'GeneralSalesPhone': 'TextEdit', 'GeneralSalesPhoneNumberExtension': 'TextEdit', 'SalesName': 'TextEdit', 'SalesPhone': 'TextEdit', 'SalesPhoneNumberExtension': 'Range', 'SalesName2': 'TextEdit', 'SalesPhone2': 'TextEdit', 'SalesPhoneNumberExtension2': 'Range', 'SalesEmail': 'TextEdit', 'FacilityPhone': 'TextEdit', 'DispatchPhone': 'TextEdit', 'HoursOfOperation': 'TextEdit', 'Notes': 'TextEdit', 'WebsiteUrl': 'TextEdit', 'Products': 'TextEdit', 'Distance': 'Range', 'FilterText': 'TextEdit', 'FilterHexColorCode': 'TextEdit', 'Image': 'TextEdit', 'OperatingStatus': 'TextEdit', 'Description': 'TextEdit', 'PinPriority': 'TextEdit', 'AdvancedContactPage': 'TextEdit', 'Mu': 'TextEdit', 'Region': 'TextEdit', 'Category': 'TextEdit', });
lyr_RogersLocations_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'url': 'TextEdit', 'slug': 'TextEdit', 'visible': 'CheckBox', 'marker_id': 'Range', 'address': 'TextEdit', 'display_address': 'TextEdit', 'address_line_1': 'TextEdit', 'address_line_2': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'postcode': 'Range', 'country': 'TextEdit', 'location_type_id': 'Range', 'image_url': 'TextEdit', 'timezone': 'TextEdit', 'facebook': 'TextEdit', 'instagram': 'TextEdit', 'x_twitter': 'TextEdit', 'yelp_id': 'TextEdit', 'location_type_name': 'TextEdit', 'priority': 'CheckBox', 'location_type_show_label': 'CheckBox', 'marker_image': 'TextEdit', 'mon': 'TextEdit', 'tue': 'TextEdit', 'wed': 'TextEdit', 'thu': 'TextEdit', 'fri': 'TextEdit', 'sat': 'TextEdit', 'sun': 'TextEdit', 'filters/0/id': 'Range', 'filters/0/name': 'TextEdit', 'filters/0/color': 'TextEdit', 'filters/0/icon': 'TextEdit', 'filters/0/pivot_store_id': 'Range', 'filters/0/hidden': 'CheckBox', 'filters/1/id': 'Range', 'filters/1/name': 'TextEdit', 'filters/1/color': 'TextEdit', 'filters/1/icon': 'TextEdit', 'filters/1/pivot_store_id': 'Range', 'filters/1/hidden': 'CheckBox', 'fields/0/id': 'Range', 'fields/0/name': 'TextEdit', 'fields/0/pivot_store_id': 'Range', 'fields/0/pivot_field_id': 'Range', 'fields/0/pivot_field_value': 'TextEdit', 'cover_image': 'TextEdit', 'locationType/id': 'Range', 'locationType/name': 'TextEdit', 'locationType/priority': 'CheckBox', 'locationType/show_label': 'CheckBox', 'marker/id': 'Range', 'marker/image': 'TextEdit', 'hours/mon': 'TextEdit', 'hours/tue': 'TextEdit', 'hours/wed': 'TextEdit', 'hours/thu': 'TextEdit', 'hours/fri': 'TextEdit', 'hours/sat': 'TextEdit', 'hours/sun': 'TextEdit', 'obf_id': 'TextEdit', 'filters/2/id': 'Range', 'filters/2/name': 'TextEdit', 'filters/2/color': 'TextEdit', 'filters/2/icon': 'TextEdit', 'filters/2/pivot_store_id': 'Range', 'filters/2/hidden': 'CheckBox', 'filters/3/id': 'Range', 'filters/3/name': 'TextEdit', 'filters/3/color': 'TextEdit', 'filters/3/icon': 'TextEdit', 'filters/3/pivot_store_id': 'Range', 'filters/3/hidden': 'CheckBox', 'filters/4/id': 'Range', 'filters/4/name': 'TextEdit', 'filters/4/color': 'TextEdit', 'filters/4/icon': 'TextEdit', 'filters/4/pivot_store_id': 'Range', 'filters/4/hidden': 'CheckBox', 'filters/5/id': 'Range', 'filters/5/name': 'TextEdit', 'filters/5/color': 'TextEdit', 'filters/5/icon': 'TextEdit', 'filters/5/pivot_store_id': 'Range', 'filters/5/hidden': 'CheckBox', });
lyr_CRH_5.set('fieldImages', {'fid': 'TextEdit', 'objectId': 'TextEdit', 'renderOrder': 'Range', 'publishStatus': 'TextEdit', 'region': 'TextEdit', 'company': 'TextEdit', 'siteName': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'products': 'TextEdit', 'website': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'country': 'TextEdit', 'code': 'Range', });
lyr_MartinMarietta_6.set('fieldImages', {'fid': 'TextEdit', 'facilityId': 'Range', 'districtId': 'Range', 'divisionId': 'Range', 'name': 'TextEdit', 'description': 'TextEdit', 'descriptionHeadline': 'TextEdit', 'title': 'TextEdit', 'subTitle': 'TextEdit', 'contactName': 'TextEdit', 'contactTitle': 'TextEdit', 'contactEmail': 'TextEdit', 'contactPhone': 'TextEdit', 'secondaryContactName': 'TextEdit', 'secondaryContactTitle': 'TextEdit', 'secondaryContactEmail': 'TextEdit', 'secondaryContactPhone': 'TextEdit', 'creditApplicationUrl': 'TextEdit', 'hoursOfOperation': 'TextEdit', 'operationCommentEmail': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'officePhone': 'TextEdit', 'productCodesList': 'TextEdit', 'productDisplayOverride': 'TextEdit', 'productsAvailable': 'TextEdit', 'railwayAccess': 'CheckBox', 'seoKeywords': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'geoLocation': 'TextEdit', 'facilityKey': 'TextEdit', 'hyperlink': 'TextEdit', 'businessUnit': 'Range', 'divisionKey': 'TextEdit', 'divisionName': 'TextEdit', 'divisionPhone': 'TextEdit', 'districtKey': 'TextEdit', 'districtName': 'TextEdit', 'districtPhone': 'TextEdit', 'salesDistributionEmail': 'TextEdit', });
lyr_Vulcan_2.set('fieldLabels', {'fid': 'hidden field', 'country': 'hidden field', 'id': 'hidden field', 'distance': 'hidden field', 'plantName': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'phone': 'no label', 'url': 'hidden field', 'summary': 'hidden field', 'description': 'hidden field', 'plantCode': 'hidden field', 'division': 'no label', 'location': 'hidden field', 'lob': 'hidden field', 'latitude': 'no label', 'longitude': 'no label', 'plantType': 'no label', 'gmArea': 'no label', 'salesDistrict': 'no label', 'contactType': 'no label', 'email': 'no label', 'firstName': 'no label', 'lastName': 'no label', });
lyr_HeidelbergLocations_3.set('fieldLabels', {'fid': 'hidden field', 'FacilityName': 'no label', 'FacilityID': 'no label', 'StreetAddress': 'no label', 'StreetAddress2': 'no label', 'City': 'no label', 'StateProvince': 'no label', 'ZipPostalCode': 'no label', 'CountryCode': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LocationID': 'no label', 'FacilityPhoneExtension': 'no label', 'CompanyName': 'no label', 'GeneralSalesPhone': 'no label', 'GeneralSalesPhoneNumberExtension': 'no label', 'SalesName': 'no label', 'SalesPhone': 'no label', 'SalesPhoneNumberExtension': 'no label', 'SalesName2': 'no label', 'SalesPhone2': 'no label', 'SalesPhoneNumberExtension2': 'no label', 'SalesEmail': 'no label', 'FacilityPhone': 'no label', 'DispatchPhone': 'no label', 'HoursOfOperation': 'no label', 'Notes': 'no label', 'WebsiteUrl': 'no label', 'Products': 'no label', 'Distance': 'no label', 'FilterText': 'no label', 'FilterHexColorCode': 'no label', 'Image': 'no label', 'OperatingStatus': 'no label', 'Description': 'no label', 'PinPriority': 'no label', 'AdvancedContactPage': 'no label', 'Mu': 'no label', 'Region': 'no label', 'Category': 'no label', });
lyr_RogersLocations_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'name': 'no label', 'lat': 'no label', 'lng': 'no label', 'phone': 'no label', 'email': 'no label', 'url': 'no label', 'slug': 'no label', 'visible': 'no label', 'marker_id': 'no label', 'address': 'no label', 'display_address': 'no label', 'address_line_1': 'no label', 'address_line_2': 'no label', 'city': 'no label', 'state': 'no label', 'postcode': 'no label', 'country': 'no label', 'location_type_id': 'no label', 'image_url': 'no label', 'timezone': 'no label', 'facebook': 'no label', 'instagram': 'no label', 'x_twitter': 'no label', 'yelp_id': 'no label', 'location_type_name': 'no label', 'priority': 'no label', 'location_type_show_label': 'no label', 'marker_image': 'no label', 'mon': 'no label', 'tue': 'no label', 'wed': 'no label', 'thu': 'no label', 'fri': 'no label', 'sat': 'no label', 'sun': 'no label', 'filters/0/id': 'no label', 'filters/0/name': 'no label', 'filters/0/color': 'no label', 'filters/0/icon': 'no label', 'filters/0/pivot_store_id': 'no label', 'filters/0/hidden': 'no label', 'filters/1/id': 'no label', 'filters/1/name': 'no label', 'filters/1/color': 'no label', 'filters/1/icon': 'no label', 'filters/1/pivot_store_id': 'no label', 'filters/1/hidden': 'no label', 'fields/0/id': 'no label', 'fields/0/name': 'no label', 'fields/0/pivot_store_id': 'no label', 'fields/0/pivot_field_id': 'no label', 'fields/0/pivot_field_value': 'no label', 'cover_image': 'no label', 'locationType/id': 'no label', 'locationType/name': 'no label', 'locationType/priority': 'no label', 'locationType/show_label': 'no label', 'marker/id': 'no label', 'marker/image': 'no label', 'hours/mon': 'no label', 'hours/tue': 'no label', 'hours/wed': 'no label', 'hours/thu': 'no label', 'hours/fri': 'no label', 'hours/sat': 'no label', 'hours/sun': 'no label', 'obf_id': 'no label', 'filters/2/id': 'no label', 'filters/2/name': 'no label', 'filters/2/color': 'no label', 'filters/2/icon': 'no label', 'filters/2/pivot_store_id': 'no label', 'filters/2/hidden': 'no label', 'filters/3/id': 'no label', 'filters/3/name': 'no label', 'filters/3/color': 'no label', 'filters/3/icon': 'no label', 'filters/3/pivot_store_id': 'no label', 'filters/3/hidden': 'no label', 'filters/4/id': 'no label', 'filters/4/name': 'no label', 'filters/4/color': 'no label', 'filters/4/icon': 'no label', 'filters/4/pivot_store_id': 'no label', 'filters/4/hidden': 'no label', 'filters/5/id': 'no label', 'filters/5/name': 'no label', 'filters/5/color': 'no label', 'filters/5/icon': 'no label', 'filters/5/pivot_store_id': 'no label', 'filters/5/hidden': 'no label', });
lyr_CRH_5.set('fieldLabels', {'fid': 'hidden field', 'objectId': 'hidden field', 'renderOrder': 'hidden field', 'publishStatus': 'hidden field', 'region': 'no label', 'company': 'no label', 'siteName': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'products': 'no label', 'website': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'country': 'hidden field', 'code': 'hidden field', });
lyr_MartinMarietta_6.set('fieldLabels', {'fid': 'hidden field', 'facilityId': 'hidden field', 'districtId': 'hidden field', 'divisionId': 'hidden field', 'name': 'no label', 'description': 'no label', 'descriptionHeadline': 'no label', 'title': 'no label', 'subTitle': 'no label', 'contactName': 'no label', 'contactTitle': 'no label', 'contactEmail': 'no label', 'contactPhone': 'no label', 'secondaryContactName': 'no label', 'secondaryContactTitle': 'no label', 'secondaryContactEmail': 'no label', 'secondaryContactPhone': 'no label', 'creditApplicationUrl': 'no label', 'hoursOfOperation': 'no label', 'operationCommentEmail': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'officePhone': 'no label', 'productCodesList': 'no label', 'productDisplayOverride': 'no label', 'productsAvailable': 'no label', 'railwayAccess': 'no label', 'seoKeywords': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'geoLocation': 'no label', 'facilityKey': 'no label', 'hyperlink': 'no label', 'businessUnit': 'hidden field', 'divisionKey': 'hidden field', 'divisionName': 'hidden field', 'divisionPhone': 'no label', 'districtKey': 'hidden field', 'districtName': 'no label', 'districtPhone': 'no label', 'salesDistributionEmail': 'no label', });
lyr_MartinMarietta_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
// ---- categorized-layer -> togglable ol.layer.Group patch ----

function makeCategoryStyle(originalStyleFn, fieldName, catValue) {
    return function(feature, resolution) {
        if (feature.get(fieldName) === catValue) {
            return originalStyleFn(feature, resolution);
        }
        return undefined;
    };
}

function splitCategorizedLayer(origLayer, source, fieldName, categories, originalStyleFn, groupTitle, groupIcon) {
    var subLayers = categories.map(function(cat) {
        var displayLabel = cat.label || cat.value;
        var subLyr = new ol.layer.Vector({
            declutter: false,
            source: source,
            style: makeCategoryStyle(originalStyleFn, fieldName, cat.value),
            title: '<img src="' + cat.image + '" /> ' + displayLabel,
            visible: true
        });
        subLyr.set('interactive', origLayer.get('interactive'));
        subLyr.set('popuplayertitle', origLayer.get('popuplayertitle'));
        subLyr.set('fieldAliases', origLayer.get('fieldAliases'));
        subLyr.set('fieldImages', origLayer.get('fieldImages'));
        subLyr.set('fieldLabels', origLayer.get('fieldLabels'));
        return subLyr;
    });
    return new ol.layer.Group({
        title: '<img src="' + groupIcon + '" /> ' + groupTitle,
        layers: subLayers,
        fold: 'close'
    });
}

var grp_Vulcan_2 = splitCategorizedLayer(
    lyr_Vulcan_2, jsonSource_Vulcan_2, 'plantType',
    [
        {value: 'Admin', image: 'styles/legend/Vulcan_2_0.png'},
        {value: 'Aggregates', image: 'styles/legend/Vulcan_2_1.png'},
        {value: 'Asphalt', image: 'styles/legend/Vulcan_2_2.png'},
        {value: 'Building Materials', image: 'styles/legend/Vulcan_2_3.png'},
        {value: 'Clean Construction Debris (CCDD)', image: 'styles/legend/Vulcan_2_4.png'},
        {value: 'Ready Mix', image: 'styles/legend/Vulcan_2_5.png'},
        {value: 'Recycled Materials', image: 'styles/legend/Vulcan_2_6.png'},
        {value: 'Sand & Gravel', image: 'styles/legend/Vulcan_2_7.png'},
        {value: 'Stone, Sand & Gravel', image: 'styles/legend/Vulcan_2_8.png'}
    ],
    style_Vulcan_2, 'Vulcan', 'styles/legend/Vulcan_2_0.png'
);

var grp_HeidelbergLocations_3 = splitCategorizedLayer(
    lyr_HeidelbergLocations_3, jsonSource_HeidelbergLocations_3, 'FilterText',
    [
        {value: 'aggregates', label: 'Aggregates', image: 'styles/legend/HeidelbergLocations_3_0.png'},
        {value: 'cement', label: 'Cement', image: 'styles/legend/HeidelbergLocations_3_1.png'},
        {value: 'concrete-products', label: 'Concrete Products', image: 'styles/legend/HeidelbergLocations_3_2.png'},
        {value: 'construction', label: 'Construction', image: 'styles/legend/HeidelbergLocations_3_3.png'},
        {value: 'hot-mix-asphalt', label: 'Hot Mix Asphalt', image: 'styles/legend/HeidelbergLocations_3_4.png'},
        {value: 'office', label: 'Office', image: 'styles/legend/HeidelbergLocations_3_5.png'},
        {value: 'other-services', label: 'Other Services', image: 'styles/legend/HeidelbergLocations_3_6.png'},
        {value: 'ready-mixed-concrete', label: 'Ready Mixed Concrete', image: 'styles/legend/HeidelbergLocations_3_7.png'},
        {value: 'recycling', label: 'Recycling', image: 'styles/legend/HeidelbergLocations_3_8.png'},
        {value: 'stabilized-sand', label: 'Stabilized Sand', image: 'styles/legend/HeidelbergLocations_3_9.png'}
    ],
    style_HeidelbergLocations_3, 'Heidelberg Locations', 'styles/legend/HeidelbergLocations_3_0.png'
);

var grp_RogersLocations_4 = splitCategorizedLayer(
    lyr_RogersLocations_4, jsonSource_RogersLocations_4, 'filters/0/name',
    [
        {value: 'Administrative Office', image: 'styles/legend/RogersLocations_4_0.png'},
        {value: 'Asphalt', image: 'styles/legend/RogersLocations_4_1.png'},
        {value: 'Construction Aggregates', image: 'styles/legend/RogersLocations_4_2.png'},
        {value: 'Ready Mix', image: 'styles/legend/RogersLocations_4_3.png'},
        {value: 'Resale Yard', image: 'styles/legend/RogersLocations_4_4.png'},
        {value: 'Road Construction & Paving', image: 'styles/legend/RogersLocations_4_5.png'},
        {value: 'Sand', image: 'styles/legend/RogersLocations_4_6.png'},
        {value: 'Specialty Products', image: 'styles/legend/RogersLocations_4_7.png'},
        {value: 'Trucking', image: 'styles/legend/RogersLocations_4_8.png'}
    ],
    style_RogersLocations_4, 'Rogers', 'styles/legend/RogersLocations_4_0.png'
);

var grp_CRH_5 = splitCategorizedLayer(
    lyr_CRH_5, jsonSource_CRH_5, 'products',
    [
        {value: 'Aggregates', image: 'styles/legend/CRH_5_0.png'},
        {value: 'Aggregates;Ready-Mixed Concrete', image: 'styles/legend/CRH_5_1.png'},
        {value: 'Asphalt', image: 'styles/legend/CRH_5_2.png'},
        {value: 'Asphalt;Aggregates', image: 'styles/legend/CRH_5_3.png'},
        {value: 'Asphalt;Aggregates;Ready-Mixed Concrete', image: 'styles/legend/CRH_5_4.png'},
        {value: 'Asphalt;Ready-Mixed Concrete', image: 'styles/legend/CRH_5_5.png'},
        {value: 'Ready-Mixed Concrete', image: 'styles/legend/CRH_5_6.png'}
    ],
    style_CRH_5, 'CRH', 'styles/legend/CRH_5_0.png'
);

var grp_MartinMarietta_6 = splitCategorizedLayer(
    lyr_MartinMarietta_6, jsonSource_MartinMarietta_6, 'productsAvailable',
    [
        {value: 'Aggregates', image: 'styles/legend/MartinMarietta_6_0.png'},
        {value: 'Asphalt', image: 'styles/legend/MartinMarietta_6_1.png'},
        {value: 'Asphalt Cement', image: 'styles/legend/MartinMarietta_6_2.png'},
        {value: 'Dolomitic Lime', image: 'styles/legend/MartinMarietta_6_3.png'},
        {value: 'Magnesia', image: 'styles/legend/MartinMarietta_6_4.png'},
        {value: 'Ready Mixed Concrete', image: 'styles/legend/MartinMarietta_6_5.png'}
    ],
    style_MartinMarietta_6, 'Martin Marietta', 'styles/legend/MartinMarietta_6_0.png'
);

grp_MartinMarietta_6.getLayers().forEach(function(l) {
    l.on('precompose', function(evt) {
        evt.context.globalCompositeOperation = 'normal';
    });
});

layersList = [
    lyr_GoogleSatelliteHybrid_0,
    lyr_OSMStandard_1,
    grp_Vulcan_2,
    grp_HeidelbergLocations_3,
    grp_RogersLocations_4,
    grp_CRH_5,
    grp_MartinMarietta_6
];