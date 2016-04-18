var words = ["Balance", "Bond", "Budget", "Capital", "Checks", "Credit Limit", "Credit Score", "Debt", "Financial Independence", "Financial Stability", "Loan", "Money", "Pay Day", "Salary", "Savings", "Social Security", "Taxes", "Welfare", "Witholding", "Accrual", "Apr", "Bad Credit", "Balance Transfer", "Bankruptcy", "Bills", "Break Even Point", "Cash Advance", "Cashiers Checks", "Cd", "Check Cashers", "Collection Agency", "Compound Interest", "Cpa", "Credit Report", "Credit Union", "Debt Consolodation", "Deduction", "Disability", "Dow Jones", "Ebt", "Eic", "Escrow", "Exchange", "Exempt", "Fiduciary", "Financial Advisor", "Financial Education", "Food Stamps", "Index Fund", "Indulgence", "Inheritance", "Insurance", "Interest Rates", "Lean", "Life Insurance", "Loan Shark", "Long Term Disability", "Low-Income", "Medicaid", "Medicare", "Micro Loan", "Mutual Funds", "Nest Egg", "Obamacare", "Opportunity Cost", "Out Of Pocket", "Overdraft", "Pawn", "Payday Loan", "Penalties", "Pension", "Poverty", "Pre-Paid Cards", "Premium", "Public Assistance", "Refinance", "Reimbursement", "Rent", "Renter'S Insurance", "Revolving Credit", "Roth Ira", "Security Deposit", "Short Term Disability", "Snap", "Sousou", "Spend", "Stock", "Stock Market", "Student Loan", "Tanda", "Tax Prep", "Thrift", "Unemployment", "W2", "Wealth", "Wealth Advisor", "Wealthy", "Wire Transfer", "Write Offs", "Zero Blanace", "Arbitration", "Atm", "Authorization", "Autopay", "Cash", "Class", "Compound", "Divorce", "Economic", "Emergency Fund", "Empty Nest", "Fafsa", "Fica", "Hedge Fund", "Hire Purchase", "Hourly", "Investment Firm", "Invoices", "Iou", "Ira", "Irs", "Lay Away", "Lay-Off", "Lease", "Lender", "Moneytree", "Mortgage", "Municipal", "Nyse", "Origniation Costs", "Priveledge", "Profitable", "Quota", "Rent To Own", "Resession", "Retirement", "Risk Management", "Risk Profile", "Rosca", "Security", "Settlement", "Travelers Checks", "Trust Fund", "Underwriting", "Union", "Word Of Mouth", "1099", "Accident", "Afford", "Alimony", "Apple Pay", "Assurances", "Bail Bond", "Bank", "Bubble", "Cash Flow", "Children", "Chip Card", "Coin Jar", "Fdic", "Fear", "Fee", "Fight Or Flight", "Health Care", "Health Set Back", "Home", "Hourly-Salary", "House", "Injury", "Karma", "Kyc", "Macro-Economics", "Margin Calls", "Membership", "Micro-Economics", "Nasdaq", "Nfc", "Points", "Portfolio Theory", "Retail Banker", "Rewards", "Rfid", "Therapist", "Time Value", "Values", "Vat Tax", "Venture Capital"]
var definition, emotion;
var randomNum = function() {
  return Math.floor(Math.random() * words.length)
};
var word = words[randomNum()];

$(".define-word").text(word);

var refreshForm = function() {
  word = words[randomNum()];
  $(".define-word").text(word);
  $(".definition").val('');
}

var updateValues = function() {
  word = word;
  definition = $(".definition").val();
  if ($("#yay-button").is(':checked')) {
    emotion = $("#yay-button").val();
  } else if ($("#meh-button").is(':checked')) {
    emotion = $("#meh-button").val();
  } else if ($("#wamp-button").is(':checked')) {
    emotion = $("#wamp-button").val();
  }
}

var postToGoogle = function() {
   $.ajax({
     url: "https://docs.google.com/a/ideo.org/forms/d/1QMqvhXtvhPFpzOu8ZT_bd5P40glbBYlJ3NKKx-E03bo/formResponse",
     data: {
       "entry.163885562": word,
       "entry.736958868": definition,
       "entry.277451473": emotion
     },
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function () {
         $('.thanks-modal').addClass("show-modal");
       },
       200: function () {
         $('.thanks-modal').addClass("show-modal");
       }
     }
  });
}

$(".submit-button").click(function() {
  updateValues();
  postToGoogle();
});

$(".modal-close-button, .thanks-modal").click(function() {
  $(".thanks-modal").removeClass("show-modal");
  refreshForm();
})