/* Components of Linear Graphing App v0.1 (built with threejs)
    What is it?
    - is a 3D graph, with matrix boxes that correspond to graph area
    - is flexible in how it scales based on unit you predetermine
    1) draws basic shapes on graph
    2) draws function on graph
    3) moves shapes and functions dynamically based on mouse/keyboard input

*/

/*
 Shape object -> is a shape function
 Function object -> is a math function
 */
/*
    Main Graph Object:
    - gets x,y,z max values, always 0 - MaxVal

    - Primary plane grids
     -> [ [-x,-y,0], [+x,+y,0] ]
     -> [ [0,-y,-z], [0,+y,+z] ]
     -> [ [-x,0,-z], [+x,0,+z] ]

    - these will have a greater opacity than inner grid boxes

    - Draw inner grid boxes (should be toggleble)

*/

/*
    Drawing functions onto the graph?

 */

// Camera-Graph Controls
