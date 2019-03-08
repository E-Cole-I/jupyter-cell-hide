require(
    // Required Pacakges
        ['base/js/namespace', 'jquery'], 
        function(jupyter, $) {
            // Run on the start of a Jupyter Notebook (https://coding-stream-of-consciousness.com/2018/11/13/jupyter-auto-run-cells-on-load/)
            $(jupyter.events).on("kernel_ready.Kernel", function () {

                // Run all the cells so the output is there
                console.log("Auto-running all cells-below...");
                jupyter.actions.call('jupyter-notebook:run-all-cells-below');
                jupyter.actions.call('jupyter-notebook:save-notebook');

                //  Retrieve all of the elements with a class name cell-tag (View -> Cell Toolbar -> Tags)
                var x = document.getElementsByClassName("cell-tag");

                //  Loop through the elements in the HTML collection
                for (i = 0, len = x.length, text = ""; i < len; i++) {
                    console.log(x[i].innerHTML);

                    // Split and take the first element to leave wyou with hidecode
                    var xSplit = x[i].innerHTML.split("<")[0];

                    // Used to 'walk up' the parent directories to hide the input div
                    var p1 = '.tag-container';
                    var p2 = '.button_container.tags_button_container';
                    var p3 = '.celltoolbar';
                    var p4 = '.ctb_hideshow.ctb_show';
                    var p5 = '.inner_cell';
                    var p6 = '.input';

                    // I used the tag "hidecode", but others can be used 
                    if (xSplit == "hidecode") {
                          // Use JQuery to walk up the directory using the variables from above and change the display css to none. 
                          $(x[i]).parent(p1).parent(p2).parent(p3).parent(p4).parent(p5).parent(p6).css( "display", "none" );
                        
                      }
                    }
            });
        }
    );