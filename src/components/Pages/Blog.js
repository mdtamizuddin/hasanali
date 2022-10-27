import React from "react";

const Blog = () => {
  const mode = localStorage.getItem("mode")
  return (
    <div>
      <section className={`${mode === "light" ? "text-black" : "text-gray-100"} min-h-[80vh]`}>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl font-medium">
                What is cors?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-lg">
                Cross-origin resource sharing is a mechanism that allows
                restricted resources on a web page to be requested from another
                domain outside the domain from which the first resource was
                served. A web page may freely embed cross-origin images,
                stylesheets, scripts, iframes, and videos{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl font-medium">
                Why are you using firebase?
              </summary>
              <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                <p>
                  Firebase helps you develop high-quality apps, grow your user
                  base, and earn more money. Each feature works independently,
                  and they work even better together.
                </p>
                <ol>
                  <li>
                    <strong>Cloud Messaging:</strong> Deliver and receive
                    messages in a more reliable way across platforms
                  </li>
                  <li>
                    <strong>Authentication:</strong> Have a lot less friction
                    with acclaimed authentication
                  </li>
                  <li>
                    <strong>Hosting:</strong> Deliver web content faster
                  </li>
                  <li>
                    <strong>Remote Configuration:</strong> Customize your app on
                    the go
                  </li>
                  <li>
                    <strong>Test Lab: </strong>Test in the lab instead of on
                    your users
                  </li>
                  <li>
                    <strong>Crash Reporting:</strong> Keep your app stable
                  </li>
                  <li>
                    <strong>Realtime Database:</strong> Store and sync app data
                    in realtime
                  </li>
                  <li>
                    <strong>Storage:</strong> File storing made easy
                  </li>
                </ol>
              </div>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl font-medium">
                How does the private route work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Private Routes in React Router (also called Protected Routes)
                require a user being authorized to visit a route (read: page).
                So if a user is not authorized for a specific page, they cannot
                access it. The most common example is authentication in a React
                application where a user can only access the protected pages
                when they are authorized (which means in this case being
                authenticated). Authorization goes beyond authentication though.
                For example, a user can also have roles and permissions which
                give a user access to specific areas of the application.{" "}
              </p>
            </details>

            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl font-medium">
                What other options do you have to implement authentication?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                MongoDB is a great document store database which can be used in
                most types of app development projects. MongoDB is built using
                C++ language, and it is free of charge (there’s an open-source
                edition). It was created in 2007, and it has only grown more
                popular ever since. Nowadays, many believe that it has become
                the most frequently used NoSQL database. However, just because
                it is so great doesn’t mean that it can work on its own. Take a
                look at six things to know before you start with MongoDB
                implementation at your organization. Use the right tools No one
                can deny that getting information from a database and getting it
                in an understandable form is one of the most important steps in
                the process of intelligible insights extraction from the data.
                This is no different even when you have a MongoDB (NoSQL
                database) implemented at your company. A problem many
                organizations face once they begin gathering and storing data in
                various places is reconciling data from traditional relational
                (SQL) and NoSQL databases.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
