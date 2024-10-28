"use client";
import React from "react";

export default function ContactIntro() {
  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-8">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          We`re Here to Help!
        </h1>
        <p className="text-lg mb-4">
          Your questions and feedback are important to us. Whether you need
          assistance or want to share your thoughts, don`t hesitate to reach
          out!
        </p>
        <p className="text-md">
          Fill out the form below or use the contact information provided. We
          look forward to connecting with you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            General Inquiries
          </h2>
          <p>
            Have a question about our services? Reach out to us for any general
            inquiries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Support
          </h2>
          <p>
            If you need assistance, our support team is available to help you
            resolve any issues.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Feedback
          </h2>
          <p>
            We value your feedback! Let us know how we can improve our services.
          </p>
        </div>
      </div>
    </div>
  );
}
