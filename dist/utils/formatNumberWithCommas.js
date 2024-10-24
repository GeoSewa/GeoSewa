export default function formatNumberWithCommas(x) {
    return new Intl.NumberFormat('en-IN').format(x);
}
