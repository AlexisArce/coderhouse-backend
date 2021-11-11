import * as path from "path";

export default {
  fileSystem: {
    productsPath: path.resolve(__dirname, "../data", "products.json"),
    cartsPath: path.resolve(__dirname, "../data", "carts.json"),
  },
  mongodb: {
    cnxStr:
      "mongodb+srv://admin:09122018carp@clustercoderhouse.vludd.mongodb.net/ecommerceCoderhouse?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: false,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "nodecoderhouse",
    private_key_id: "16a3db852297bca1762bd65eec8243e52418a0e8",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpS/ffidd31H+e\n3GtOEkAa/20tTKsvQLcJFTy6MG2oJCYSPxJrNkyYuogUqxyVA31mDlz6f4oRjuIg\na08GZzBx3XhY7vDghq61cYvlVa9b5yAX22JdN+osxBwjMraDIp3154dJatC6dujI\nZsXJWsCg4f/KKHJsYlIdDBOnvE9VH/2dAFbTeeS/3Ft0WbxwkXLB1q5PimwZ0G2B\n/dn422EgxuyOp8sRlxjeCH3aMnDlLsh5oYFfq56PPGGQ6OAwOFLRuEbfdvs5r2T2\nzXDo23YDy8E/0lYuGjGjIURK1sIFIjgTSZDwV6Wt3Dcn5ky1ZaH6c1o9hzzJkSWC\nphX1V5KbAgMBAAECggEADXe3JMfE5cn4Sw1y1dea1Or75u4h8hTeWrEfTxp6JrWV\nd78funqr1jyEhcxk7i/EYoGDAQRzWdk5gOW4eCRuVKiPIdgEPoBIVrPNMrXByPhW\nc79mkE7Z6KzDJkOrBDyVP1InT35ZU3QRKZwPYOjAySuhWxYjoB6kNJ5Y0++lifpr\ntA5ORTu3MhToIRnLU6xlgFsH9CjNAG1nqr3QRZwx/Dj7LM8YfeNuW4MDRjD1jWtn\nSBdoihnyIfBcSedVrbeGfOBzmyvh6HabWl0mCVpINkwTDyrSEg/P0vUs//+2OMYq\naC/8ktmas/LFa9C1lLbOeiPcVtfnBW54YrvP52ZcaQKBgQDn787BAeJMBCOxwWJY\nkZWopmTWIjSC4sPPLAr1sGSt/2P7hOSbO6O7PpMZ1LBc6/3XNOLjdvlPS4R3b3e8\nbDvBgaLLZf0ArMwWt31ItOPVT1R7ES5YELMxql+mCQPWJX1rpOjtLtoXMH4KNJ6t\nXnie7LomjGl7szZ3kzpU1bm9eQKBgQC63HSFg7cM/sqZizJLBr8KRdgDYO4+/L5k\nb46fRaqY44SbXPqu8L2DCtqUG7D798T0VnYok4DHCHnDYArnEkWS/LWiL7lRa/Ba\nAk1c8JtC46Pd8ta0ZFzEeEcO9xQLypvHepwEbHWZaaEu9ZTLGCcdxLb+SDH3hsbQ\nWLzdw84PswKBgDqc/dEE2t1/Bk47otDjKcEPG9iJmF+jUvyeEr74LtlR+0Bq2yLn\ntX7yV1Zly5QQB3xFXzlArcx+NyG/x7CUYZ2LV0qzoXZ0NLdg84ZWQGV9wMnBE8cp\noT9h4P4itRd/LezwJfUaq/7EQHXvylHh1/XBuWFYhqe+KHubd1hNEr1xAoGBAKxS\nngp625baadCLs8fI4ukAXCNRgqUHxDUvQ+HSB2+Tcjks1+n5DWwJ2GV53A+iATor\nejAVR09Fm7T3n1ZVXWAeOQrm5AoYdsErGlk5cpWPBRGr3yDg5UQyf6Vnak8te9fM\nVJEnzJO7++8ofx2Emp4zSWbbAWl6G2MMUrBY4HFNAoGBAI1kSN+qxQJuYWZeLneo\nGPa2K0UQC5aKxtcnmsUXgA7UIgrfAEytFhdQWVwCiIzTyLgOp+HtMErnqPTFX+QF\nbKQNvyhRZTdwcMtuGEYyUi+7RiJDzf/FZmZEDgLgtjt5ms0HmdiMYAgp8W/1QmrJ\n8+gjyfb/2M7DkO1GjtPmmZgR\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-2n5b0@nodecoderhouse.iam.gserviceaccount.com",
    client_id: "106742396473329705789",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2n5b0%40nodecoderhouse.iam.gserviceaccount.com",
  },
};
