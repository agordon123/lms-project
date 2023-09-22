import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
/**
 * Creates and exports GET and POST route handlers for file uploads.
 * @returns An object containing GET and POST route handlers.
 */
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});