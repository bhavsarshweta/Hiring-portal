<template>
    <div>
    <body>
    <div class="container d-flex justify-content-center mt-50 mb-50" ref="invoice">
        <div class="row">
            <div class="col-md-12 text-right mb-3">
                <button class="btn btn-primary" @click="generatePDF" id="download"> download pdf</button>
            </div>
            <div class="col-md-12">
                <div class="card" id="invoice">
                    <div class="card-header bg-transparent header-elements-inline">
                        <h6 class="card-title text-primary">Sale invoice</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-4 pull-left">

                                    <ul class="list list-unstyled mb-0 text-left">
                                        <li>2269 Six Sigma</li>
                                        <li>New york city</li>
                                        <li>+1 474 44737 47 </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-4 ">
                                    <div class="text-sm-right">
                                        <h4 class="invoice-color mb-2 mt-md-2">Invoice #BBB1243</h4>
                                        <ul class="list list-unstyled mb-0">
                                            <li>Date: <span class="font-weight-semibold">March 15, 2020</span></li>
                                            <li>Due date: <span class="font-weight-semibold">March 30, 2020</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-md-flex flex-md-wrap">
                            <div class="mb-4 mb-md-2 text-left"> <span class="text-muted">Invoice To:</span>
                                <ul class="list list-unstyled mb-0">
                                    <li>
                                        <h5 class="my-2">Tibco Turang</h5>
                                    </li>
                                    <li><span class="font-weight-semibold">Samantha Mutual funds Ltd</span></li>
                                    <li>Gurung Street</li>
                                    <li>23 BB Lane</li>
                                    <li>Hong kong</li>
                                    <li>234 456 5678</li>
                                    <li><a href="#" data-abc="true">tibco@samantha.com</a></li>
                                </ul>
                            </div>
                            <div class="mb-2 ml-auto"> <span class="text-muted">Payment Details:</span>
                                <div class="d-flex flex-wrap wmin-md-400">
                                    <ul class="list list-unstyled mb-0 text-left">
                                        <li>
                                            <h5 class="my-2">Total Due:</h5>
                                        </li>
                                        <li>Bank name:</li>
                                        <li>Country:</li>
                                        <li>City:</li>
                                        <li>Address:</li>
                                        <li>IBAN:</li>
                                        <li>SWIFT code:</li>
                                    </ul>
                                    <ul class="list list-unstyled text-right mb-0 ml-auto">
                                        <li>
                                            <h5 class="font-weight-semibold my-2">$1,090</h5>
                                        </li>
                                        <li><span class="font-weight-semibold">Hong Kong Bank</span></li>
                                        <li>Hong Kong</li>
                                        <li>Thurnung street, 21</li>
                                        <li>New standard</li>
                                        <li><span class="font-weight-semibold">98574959485</span></li>
                                        <li><span class="font-weight-semibold">BHDHD98273BER</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-lg">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Hours</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 class="mb-0">Arts and design template</h6> <span class="text-muted">in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.Duis aute irure dolor in reprehenderit</span>
                                    </td>
                                    <td>$120</td>
                                    <td>180</td>
                                    <td><span class="font-weight-semibold">$300</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 class="mb-0">Template for desnging the arts</h6> <span class="text-muted">Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                                    </td>
                                    <td>$140</td>
                                    <td>100</td>
                                    <td><span class="font-weight-semibold">$240</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 class="mb-0">Technical support international</h6> <span class="text-muted">Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                                    </td>
                                    <td>$250</td>
                                    <td>$250</td>
                                    <td><span class="font-weight-semibold">$500</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-body">
                        <div class="d-md-flex flex-md-wrap">
                            <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                                <h6 class="mb-3 text-left">Total due</h6>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th class="text-left">Subtotal:</th>
                                                <td class="text-right">$1,090</td>
                                            </tr>
                                            <tr>
                                                <th class="text-left">Tax: <span class="font-weight-normal">(25%)</span></th>
                                                <td class="text-right">$27</td>
                                            </tr>
                                            <tr>
                                                <th class="text-left">Total:</th>
                                                <td class="text-right text-primary">
                                                    <h5 class="font-weight-semibold">$1,160</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-right mt-3"> <button type="button" class="btn btn-primary"><b><i class="fa fa-paper-plane-o mr-1"></i></b>
                                        Send invoice</button> </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"> <span class="text-muted">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.Duis aute irure dolor in reprehenderit</span> </div>
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
</template>

<script>


export default {
  
  methods: {
    generatePDF() {
      const invoice = this.$refs.invoice;
      console.log(invoice);
      console.log(window);
      var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(invoice).set(opt).save();
    }
  }
}
</script>


<style  scoped>
    body {
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5385;
    color: #333;
    text-align: left;
    background-color: #eee
}

.mt-50 {
    margin-top: 50px
}

.mb-50 {
    margin-bottom: 50px
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .1875rem
}

.card-img-actions {
    position: relative
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: center
}

.card-title {
    margin-top: 10px;
    font-size: 17px
}

.invoice-color {
    color: red !important
}

.card-header {
    padding: .9375rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .02);
    border-bottom: 1px solid rgba(0, 0, 0, .125)
}

a {
    text-decoration: none !important
}

.btn-light {
    color: #333;
    background-color: #fafafa;
    border-color: #ddd
}

.header-elements-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}

@media (min-width: 768px) {
    .wmin-md-400 {
        min-width: 400px !important
    }
}

.btn-primary {
    color: #fff;
    background-color: #2196f3
}

.btn-labeled>b {
    position: absolute;
    top: -1px;
    background-color: blue;
    display: block;
    line-height: 1;
    padding: .62503rem
}
</style>