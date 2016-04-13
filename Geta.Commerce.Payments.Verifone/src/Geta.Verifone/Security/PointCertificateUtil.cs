﻿using System;
using System.Security.Cryptography.X509Certificates;

namespace Geta.Verifone.Security
{
    /// <summary>
    /// Summary description for PointCertificateUtil
    /// </summary>
    public class PointCertificateUtil
    {
        public static X509Certificate2 GetMerchantCertificate()
        {
            return GetCertificate(StoreName.My, StoreLocation.CurrentUser, "CN=demo-merchant-agreement");
        }

        public static X509Certificate2 GetPointCertificate()
        {
            return GetCertificate(StoreName.TrustedPublisher, StoreLocation.LocalMachine, "CN=epayment.point.fi");
        }

        private static X509Certificate2 GetCertificate(StoreName storeName, StoreLocation storeLocation, string subject)
        {
            X509Store store = new X509Store(storeName, storeLocation);
            store.Open(OpenFlags.ReadOnly);

            foreach (X509Certificate2 certificate in store.Certificates)
            {
                if (subject.Equals(certificate.Subject))
                {
                    return certificate;
                }
            }

            throw new NullReferenceException("No such certificate: " + subject);
        }
    }
}