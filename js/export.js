var date = new Date(),
    locale = "en-us",
    month = date.toLocaleString(locale, {
        month: "long"
    });
var OrgName = document.getElementById('OrganizationalSelect').value;
$("#export_btn_rawdata").click(
    function() {
        JSONToCSVConvertor(data_to_execl, "raw data for " + OrgName + " on " + "" + date.getDate() + "" + month, true);
    }
);

$("#export_btn_customchart").click(


    function() {
        var canvas = document.getElementById("custom_charter_naa_");
        // draw to canvas...
        canvas.toBlob(function(blob) {
            var s = x_selected + "  vs  " + selected_y + " " + date.getDate() + "" + month;
            saveAs(blob, s);
        });
    });

$("#export_btn_standardcharts").click(
    function() {
        var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);

        $pageloader[0].classList.toggle('is-active');

        doc = new jsPDF({
            //  orientation: 'landscape',
            unit: 'in',
            format: [100, 13]
        });

        countx = 0.5;
        county = 1;

        htoc(0);




    }
);



function htoc(i) {
    if (i == chart_ids.length) {
        //name=''+new Date()
        doc.save('sample-file.pdf');
        var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);

        $pageloader[0].classList.toggle('is-active');
    } else {
        var s = "#" + chart_ids[i];

        html2canvas($(s), {
            onrendered: function(a) {
                var imgData = a.toDataURL(
                    'image/png');

                if (chart_ids[i] == "volume_vs_pc" || chart_ids[i] == "volume_vs_version_vs_pc" || chart_ids[i] == "ageing_of_open_vs_severity") {
                    doc.addImage(imgData, 'PNG', 0, county);
                    county += 8;
                } else if (chart_ids[i] == "categorized_RCA") {
                    doc.addImage(imgData, 'PNG', 3, county);
                    county += 8;

                } else {
                    doc.addImage(imgData, 'PNG', 3, county);
                    county += 4;

                }

                htoc(++i);
            }
        });
    }



}
