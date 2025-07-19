import Button from "@/components/Button/Button";
import styles from '../DetailProduct.module.scss';
import FormItem from "@/pages/DetailProduct/components/FormIntem";

const Review = ({ }) => {
    return (
        <div className={styles.review}>
            <p className={styles.review}>REVIEWS</p>
            <p className={styles.noreview}>There are no reviews yet.</p>
            <div className={styles.replyForm}>
                <p className={styles.replyTitle}>BE THE FIRST TO REVIEW "CONSECTETUR NIBH AT"</p>
                <p className={styles.replyContent}>Your email address will not be published. Required fields are marked </p>
                {/* Rating */}
                <FormItem label="Your rating" type="rating" isRequired />
                {/* Review */}
                <FormItem label="Your review" type="textarea" isRequired />
                {/* Name */}
                <FormItem label="Name" type="input" isRequired />
                {/* Email */}
                <FormItem label="Email" type="email" isRequired />
                {/* Save my name, email, and website in this browser for the next time I comment. */}
                <div className={styles.confirmForm}>
                    <input type="checkbox" name="save" id="save" />
                    <label htmlFor="save">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                {/* Submit */}
                <div className={styles.btnSubmit}>
                    <Button content="SUBMIT" />
                </div>
            </div>
        </div>
    )
}

export default Review;