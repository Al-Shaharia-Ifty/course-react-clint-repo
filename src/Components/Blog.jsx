import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mt-10 mx-20">
        <h2 className="text-3xl">What is CORS?</h2>
        <p className="text-xl mt-3 text-justify">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="mt-10 mx-20">
        <h2 className="text-3xl">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p className="text-xl mt-3 text-justify">
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together. Usually, authentication by a server entails the use
          of a user name and password. Other ways to authenticate can be through
          cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="mt-10 mx-20">
        <h2 className="text-3xl">How does the private route work?</h2>
        <p className="text-xl mt-3 text-justify">
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </div>
      <div className="my-10 mx-20">
        <h2 className="text-3xl">What is Node? How does Node work?</h2>
        <p className="text-xl mt-3 text-justify">
          A node is a basic unit of a data structure, such as a linked list or
          tree data structure. Nodes contain data and also may link to other
          nodes. Links between nodes are often implemented by pointers. It is a
          used as backend service where javascript works on the server-side of
          the application. This way javascript is used on both frontend and
          backend. Node. js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
