export default function errorHandler(err, req, res, next) {
    console.log(err);
    next(err);
}
