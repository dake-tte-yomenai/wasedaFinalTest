import styles from "./home.module.css";
import Image from "next/image";

export default function Homepage(){
    return(
        <div className={styles.wrapper}>
            
            <header className={styles.header}>
                <div>Works</div>
                <div>Blog</div>
                <div>Content</div>
            </header>


            <div className={styles.main1}>
                <div className={styles.boxa}>
                    <div className={styles.left1}>
                        <div>
                            <p>
                                Hi,I am John,
                                <br/>Creative Technologist
                            </p>
                            <br/>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                            <br/>sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                            <br/>consequat sunt nostrud amet.
                            <br/>
                            <button className={styles.btn}>
                                <div>
                                    Download Resume
                                </div>
                            </button> 
                        </div>
                        
                    </div>
                    <div className={styles.right1}>
                        <Image src="/imageJohn.png" alt="ジョン" width={243} height={243}></Image>
                    </div>
                </div>
                
            </div>

            
            <div className={styles.main2}>
                <div className={styles.boxb}>
                    <div className={styles.boxb1}>
                        <div className={styles.text1}>
                            Recent posts
                        </div>
                        <div className={styles.text2}>
                            View all
                        </div>
                    </div>
                    <div className={styles.boxb2}>
                        <div className={styles.left2}>
                            <div className={styles.textbox}>
                                <div className={styles.title}>Making a design system from 
                                    <br/>Scratch
                                </div>
                                
                                <div className={styles.date}>
                                    12 Feb 2020　|　Design,Pattern
                                </div>
                                <div className={styles.des}>
                                        Amet minim mollit non deserunt ullamco est sit 
                                    <br/>aliqua dolor do amet sint. Velit officia consequat 
                                    <br/>duis enim velit mollit. Exercitation veniam 
                                    <br/>consequat sunt nostrud amet.
                                </div>
                            </div>
                            
                        </div>
                        <div className={styles.right2}>
                            <div className={styles.textbox}>
                                <div className={styles.title}>Creating pixel perfect icons in
                                    <br/>Figma
                                </div>
                                <div className={styles.date}>
                                    12 Feb 2020　|　Design,Pattern
                                </div>
                                <div className={styles.des}>
                                        Amet minim mollit non deserunt ullamco est sit 
                                    <br/>aliqua dolor do amet sint. Velit officia consequat 
                                    <br/>duis enim velit mollit. Exercitation veniam 
                                    <br/>consequat sunt nostrud amet.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                
                
            <div className={styles.main3}>
                <div className={styles.allbox}>
                    <div className={styles.boxc0}>
                        Featured works
                    </div>
                    <div className={styles.boxc}>
                        <div className={styles.left3}>
                            <Image src="/Frame1.png" alt="フッター" width={246} height={180} className={styles.pic}></Image>
                        </div>
                        <div className={styles.right3}>
                            <div className={styles.title}>
                                Designing Dashboards
                            </div>
                            <div className={styles.con}>
                                <div className={styles.l}>
                                    2020
                                </div>
                                <div className={styles.r}>
                                    Dashboard
                                </div>
                            </div>
                            <div className={styles.des}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                                <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                <br/>nostrud amet.
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxc}>
                        <div className={styles.left3}>
                            <Image src="/Frame2.png" alt="フッター" width={246} height={180} className={styles.pic}></Image>
                        </div>
                        <div className={styles.right3}>
                            <div className={styles.title}>
                                Vibrant Portraits of 2020
                            </div>
                            <div className={styles.con}>
                                <div className={styles.l}>
                                    2018
                                </div>
                                <div className={styles.r}>
                                    Illustration
                                </div>
                            </div>
                            <div className={styles.des}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                                <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                <br/>nostrud amet.
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxc}>
                        <div className={styles.left3}>
                            <Image src="/Frame3.png" alt="フッター" width={246} height={180} className={styles.pic}></Image>
                        </div>
                        <div className={styles.right3}>
                            <div className={styles.title}>
                                36 Days of Malayalam type
                            </div>
                            <div className={styles.con}>
                                <div className={styles.l}>
                                    2018
                                </div>
                                <div className={styles.r}>
                                    Typography
                                </div>
                            </div>
                            <div className={styles.des}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                                <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                <br/>nostrud amet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>  


            <div className={styles.footer}>
                <Image src="/ImageFooter.png" alt="フッター" width={1200} height={182}></Image>
            </div>
        </div>
    )
}