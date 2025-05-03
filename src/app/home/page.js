import styles from "./home.module.css";
import Image from "next/image";

export default function Homepage(){
    return(
        <div>
            <header className={styles.header}>
                <div className={styles.content}>
                    <div>
                        Works　Blog　Content
                    </div>
                </div>
            </header>
            <div className={styles.main1}>
                <div className={styles.leftmain1}>
                    <div className={styles.title}>
                        Hi,I am John,
                        <br/>Creative Technologist
                    </div>
                    <div>
                        <br/>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                        <br/>sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                        <br/>consequat sunt nostrud amet.
                    </div>
                </div>
                <div className={styles.rightmain1}>
                    <Image src="/imageJohn.png" alt="ジョン" width={243} height={243}></Image>
                </div>
            </div>
            <div className={styles.main2}>
                <div className={styles.boxleft}>
                    <div className={styles.title}>Making a design system from 
                        <br/>scratch
                    </div>
                    <br/>
                    <div>
                        12 Feb 2020　|　Design,Pattern
                        <br/>
                        <br/>
                        Amet minim mollit non deserunt ullamco est sit 
                        <br/>aliqua dolor do amet sint. Velit officia consequat 
                        <br/>duis enim velit mollit. Exercitation veniam 
                        <br/>consequat sunt nostrud amet.
                    </div>
                </div>
                <div className={styles.boxright}>
                <div className={styles.title}>Creating pixel perfect icons in
                        <br/>Figma
                    </div> 
                    <br/>
                    <div>
                        12 Feb 2020　|　Design,Pattern
                        <br/>
                        <br/>
                        Amet minim mollit non deserunt ullamco est sit 
                        <br/>aliqua dolor do amet sint. Velit officia consequat 
                        <br/>duis enim velit mollit. Exercitation veniam 
                        <br/>consequat sunt nostrud amet.
                    </div>
                </div>
            </div>
            <div className={styles.main3}>
                <div>Featured works</div>
                <div className={styles.bar}>
                    <div className={styles.left}>
                        <Image src="/Frame1.png" alt="フッター" width={246} height={180}></Image>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>Designing Dashboards</div>
                        <br/>
                        <div className={styles.pillContainer}>
                            <div className={styles.pill}>2020</div>
                            <div className={styles.pillText}>Dashboard</div>
                        </div>
                        <br/>
                        <div>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                            <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                            <br/>nostrud amet.
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <br/>
                <div className={styles.bar}>
                    <div className={styles.left}>
                        <Image src="/Frame2.png" alt="フッター" width={246} height={180}></Image>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>Vibrant Portraits of 2020</div>
                        <br/>
                        <div className={styles.pillContainer}>
                            <div className={styles.pill}>2018</div>
                            <div className={styles.pillText}>Illustration</div>
                        </div>
                        <br/>
                        <div>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                            <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                            <br/>nostrud amet.
                        </div>
                    </div>
                </div>
                <br/>
                <div className={styles.bar}>
                    <div className={styles.left}>
                        <Image src="/Frame3.png" alt="フッター" width={246} height={180}></Image>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>36 Days of Malayalam type</div>
                        <br/>
                        <div className={styles.pillContainer}>
                            <div className={styles.pill}>2018</div>
                            <div className={styles.pillText}>Typography</div>
                        </div>
                        <br/>
                        <div>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
                            <br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                            <br/>nostrud amet.
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